import React from "react";

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved Book</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Saved Books</h3>
                        {props.savedBooks.map(savedbook => {
                            return (
                                <li className="list-group-item">
                                    <div className="SearchResult row" id={savedbook.title + "Card"} key={savedbook._id}>
                                        {/* col-3 show image of the book */}
                                        <div className="bookImage col-3">
                                            <img src={savedbook.image} alt={savedbook.title} />
                                        </div>
                                        {/* col-9 show information of the book */}
                                        <div className="bookInfo col-9">
                                            <div className="row">
                                                <h2 className="bookTitle">{savedbook.title}</h2>
                                            </div>
                                            <div className="row">
                                                <h3 className="bookAuthor">{savedbook.author}</h3>
                                            </div>
                                            <div className="row">
                                                <p className="bookDescription">{savedbook.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row buttonDiv ">
                                        <button className="saveBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                            Delete Book
                                    </button>
                                        <a href={savedbook.link} target="_blank">
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
export default SavedResult 