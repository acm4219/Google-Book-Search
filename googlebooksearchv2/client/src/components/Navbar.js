import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div> 
            <nav className="navbar navbar-dark bg-dark"><Link to="/" className="navbar-brand">Google Book Search</Link>
            <ul class="nav">
            <li className="nav-item"><Link className="nav-link active" to="/search">Search</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/books">Saved</Link></li>
            </ul>
            </nav>
        </div>
    )

}

export default Navbar;