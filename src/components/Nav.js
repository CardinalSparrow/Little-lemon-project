import React from "react";
import logo from '../images/Logo.svg';
import { useState } from "react";
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={`{navbar ${menuOpen ? "open" : "close"}`}>
            <a href="/" className="logo">
                <img src={logo} alt="logo"/>
            </a>

            {/* mobile navbar */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* nav elements */}
            <ul className={`nav-links ${menuOpen ? "visible" : "invisible"}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Reservation</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Log in</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav