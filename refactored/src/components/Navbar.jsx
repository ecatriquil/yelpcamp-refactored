import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">YelpCamp</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">SignIn <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Add new Campground</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;