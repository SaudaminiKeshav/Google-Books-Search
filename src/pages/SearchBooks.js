import React, { Component } from "react";
import API from "../utils/API";


class SearchBooks extends Component {
    state = {
        search: "",
        results: [],
    };

    componentDidMount() {
        API.getGoogleSearchBooks()
            .then(res => {
                let results = res.data.items;
                results = results.map(result => {
                    let book = {
                        id: result.id,
                        title: result.volumeInfo.authors,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        description: result.volumeInfo.description,
                        link: result.volumeInfo.infoLink
                    };
                    return book;
                });
                this.setState({results: results})
            })
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        this.setState ({search: event.target.value})
    }


}

export default SearchBooks 