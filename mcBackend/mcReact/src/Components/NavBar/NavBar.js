import React from 'react'
import "./NavBar.css";
import Lion from "../Header/Lion"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="Bar">
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Upload">Upload</Link>
                </li>
                <Lion/>
                <li>
                    <Link to="/Gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </nav>
        </div>
    )
}

export default NavBar