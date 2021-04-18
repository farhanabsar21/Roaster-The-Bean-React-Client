import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from "../../../../Images/logo/logo.png";
import "./Navigation.css";

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-white">
            <div class="container">
                <Link class="navbar-brand" to="/"><img src={logo} alt="logo" className="img-fluid brand-logo"/></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link mr-5 active text-white" aria-current="page" href="#">{loggedInUser.email}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 text-white" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 text-white" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 text-white" href="#">Contact</a>
                        </li>
                        
                        <li class="nav-item login-btn">
                            <Link class="nav-link text-dark" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;