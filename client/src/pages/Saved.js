import React, { Component, useEffect, useState } from "react";
import API from "../utils/API";
import Results from "../components/Results";

const Saved = (props) => {
    const [books, setBooks] = useState([]);

    // function componentDidMount() {
    //     API.savedBooks()
    //         .then(savedBooks => this.setState({ savedBooks: savedBooks }))
    //         .catch(err => console.error(err));
    // }

    useEffect(() => {
        setBooks(props.books)

        if (props.book)
            props.onSelectionChange(props.books)
            console.log(props.books)

            // let authors = props.books.authors;
            // let description =props.books.description;
            // let image = props.books.image;
            // let link = books.link;
            // let title = books.title;
            // let _id = books._id;
    })
  

    return (
        <div className="container">
            <h2>Saved books</h2>
            {/* <Results books={this.state.savedBooks} onSelectionChange={this.handleBookSelectionChange.bind(this)}/> */}
        </div>
    )

}

export default Saved;