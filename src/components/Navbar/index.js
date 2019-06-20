import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="mv-content-header navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">TV Programmes</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item text-white" to="/">Dramas</Link>
                                <Link className="dropdown-item text-white" to="/">Entertainment, Current affairs</Link>
                                <Link className="dropdown-item text-white" to="/">News</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Originals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Recently Added</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;