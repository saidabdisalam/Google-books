import React from "react";
import BookAPI from '../utils/BookAPI';

function Results(props) {
    function saveBook(bookInfo) {
        BookAPI.saveBook(bookInfo);
    }

    if(props.results.data) {
        return (
            <div className="results">
                <h2>Results</h2>
                <ul>
                {props.results.data.items.map((book, i) => {
                    return (
                        <li key={i}>
                            <h4>{book.volumeInfo.title}</h4>
                            <h5>{"Author(s): " + (book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "")}</h5>
                            <br />
                            <div>
                                <img className="bookImg" height="10%" src={book.volumeInfo.imageLinks.smallThumbnail}/>
                                <p className="bookDesc">{book.volumeInfo.description}</p>
                            </div>
                            <span>
                                <button className="saveButton" onClick={() => {saveBook(book.volumeInfo)}}>Save</button>
                                <a href={book.volumeInfo.infoLink} target="_blank">
                                    <button className="viewButton">View</button>
                                </a>
                            </span>
                        </li>
                    )
                })}
                </ul>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}

export default Results;