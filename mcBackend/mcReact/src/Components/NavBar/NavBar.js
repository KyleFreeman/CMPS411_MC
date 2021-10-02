import React from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Upload">Upload</Link>
            </li>
            <li>
                <Link to="/Gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
        </div>
    )
}

export default NavBar