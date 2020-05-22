import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <a className="navbar-brand" href="#">YelpCamp</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">SignIn <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Add new Campground</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;