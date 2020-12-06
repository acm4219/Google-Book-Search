import React from "react";
import IntroJumbo from "../components/IntroJumbo"

function Home() {
    return (
        <div>
        <IntroJumbo />
        <div className="d-flex justify-content-center">
        <img className="m-4 pt-5" alt="books" src={process.env.PUBLIC_URL + '/books2.jpg'} /> 
        </div>
        </div>
    )   
}

export default Home;