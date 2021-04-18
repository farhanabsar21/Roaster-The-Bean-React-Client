import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <section className="Footer p-5">
            <div className="footer-container d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4>Location</h4>
                            <ul className="list-group">
                                <li>24-7, Banani, Dhaka</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Company</h4>
                            <ul className="list-group">
                                <li>Services</li>
                                <li>Review</li>
                                <li>Projects</li>
                                <li>Subscribe</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Quick Link</h4>
                            <ul className="list-group">
                                <li>Login</li>
                                <li>Register</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>About Us</h4>
                            <ul className="list-group">
                                <li><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda iusto qui repellat fuga suscipit quas necessitatibus neque iure ipsa facere.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-white">All rights reserved @Farhan Absar 2021</p>
            </div>
        </section>
    );
};

export default Footer;