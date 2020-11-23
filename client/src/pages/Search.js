import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";
import Saved from "./Saved";
const resultStyle = {
    text:"Searched Books"
        }
     const   savedStyle={
    text:"Saved Books"
        }
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleBookSelection = this.handleBookSelectionChange.bind(this);
        this.state = {
            value: "",
            books: []
        };
    }



    componentDidMount() {
        this.searchBook();
    }

    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    handleBookSelectionChange(bookSaved) {
        console.log(bookSaved[0] != undefined ? bookSaved[0].title : "");
        this.setState({ books: bookSaved })
        alert(`Book has been saved!`)
    }


    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2 style={this.state.books.length == 0 ? resultStyle : savedStyle}></h2>
                    <Results books={this.state.books} onSelectionChange={this.handleBookSelectionChange.bind(this)} />
                </div>
            </div>
        )
    }
}

export default Search;
