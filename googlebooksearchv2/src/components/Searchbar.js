import React from "react";
import Results from "./Results"

function Searchbar(props){
    return(
        <div>
            <form className="search">
                <div className="form-group">
                    <label htmlFor="books">Book Name:</label>
                    <input 
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="book"
                        list="books"
                        type="text"
                        className="form-control"
                        placeholder="Search for your favorite books"
                        id="book"
                    />
                    {/* <datalist id="books">
                        {props.books.map(book => (
                            <option value={book} key={book} />
                         ))}
                    </datalist> */}
                    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
                </div>
            </form>
            <Results />
        </div>
    )
}

export default Searchbar;