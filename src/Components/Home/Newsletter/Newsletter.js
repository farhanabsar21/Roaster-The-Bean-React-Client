import React from 'react';
import "./Newsletter.css";

const Newsletter = () => {
    return (
        <div className="Newsletter p-5 d-flex align-items-center">
            <div className="container text-center">
                <div>
                    <h2>Wanna Keep In Touch?</h2>
                    <h5 className="text-secondary">We will send you our regular updates through mail.</h5>
                </div>
                <div className="form-container mt-3">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="your name.." />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="your subject.." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="text" placeholder="your email.." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <textarea name="" id="" cols="30" rows="5" placeholder="your message.."></textarea>
                                </div>
                            </div>
                            <div>
                                <button className="btn mt-2">Send</button>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;