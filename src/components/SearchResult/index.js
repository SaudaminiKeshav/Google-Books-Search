import React from "react";

const SearchResult = props => {
    return (
        <div className="card">
            <div className="card-body player">
                <div id="article">
                    {props.books.map(book => {
                        return (
                            <li className="list-group-item">
                                <div className="SearchResult row" id={book.title + "Card"}>
                                    {/* col-3 show image of the book */}
                                    <div className="bookImage col-3">
                                        <img src={book.image} alt={book.title} />
                                    </div>
                                    {/* col-9 show information of the book */}
                                    <div className="bookInfo col-9">
                                        <div className="row">
                                            <h2 className="bookTitle">{book.title}</h2>
                                        </div>
                                        <div className="row">
                                            <h3 className="bookAuthor">{book.author}</h3>
                                        </div>
                                        <div className="row">
                                            <p className="bookDescription">{book.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row buttonDiv ">
                                    <button className="saveBook btn btn-primary" id={book.id} onClick={() => book.saveBook()}>
                                        Save Book
                                    </button>
                                    <a href={book.link} target="_blank">
                                        <button className="viewBook btn btn-success">
                                            View Book
                                        </button>
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}
export default SearchResult 