import React from "react";
import logo from "../images/Logo.svg"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="" />
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 422 Cityway, USA</li>
                        <li>Phone: <br/> + 0111 234 567</li>
                        <li>Email: <br/> food@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                    <li><a href="/">Twitter</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;