import React from "react";
import { Link } from "react-router-dom";

function Jumbotron() {
    return(
        
        <div className="jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 d-flex justify-content-center">Google Book Search With React!</h1>
                <hr className="my-4" />
                <p className="lead d-flex justify-content-center">Search and Save your Favorite Books</p>
                <br/>
                <Link className="btn btn-primary btn-lg d-flex justify-content-center" to="/search">Get Started</Link> 
            </div>
        </div>
        
    )
}

export default Jumbotron;
