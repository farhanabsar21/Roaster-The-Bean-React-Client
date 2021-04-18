import React from 'react';
import "./Social.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Social = () => {
    return (
        <div className="social-icons">
            <div className="row">
                <div className="col-md-12 text-center">
                    <span className="single-social-icon"><FontAwesomeIcon icon={faFacebook} size="2x" color="white" className="ml-4"/></span>
                    <span className="single-social-icon"><FontAwesomeIcon icon={faTwitter} size="2x" color="white" className="ml-4"/></span>
                    <span className="single-social-icon"><FontAwesomeIcon icon={faInstagram} size="2x" color="white" className="ml-4"/></span>
                </div>
            </div>
        </div>
    );
};

export default Social;