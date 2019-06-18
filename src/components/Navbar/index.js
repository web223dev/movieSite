import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">TV Programmes</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/">Dramas</Link>
                                <Link className="dropdown-item" to="/">Entertainment, Current affairs</Link>
                                <Link className="dropdown-item" to="/">News</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Originals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Recently Added</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;