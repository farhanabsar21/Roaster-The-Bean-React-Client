import React from 'react';
import "./About.css";
import aboutImg from "../../../Images/about.jpg";
const About = () => {
    return (
        <section className="About p-5 mt-5">
            <div className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img src={aboutImg} alt="about" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="About-content">
                                <h2>Who We Are?</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, ab. Fugit, ipsum! Laboriosam, quidem ab vitae praesentium sint repellendus illo, quam odio, incidunt excepturi consequuntur maxime ex repudiandae veniam soluta.</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3>1000+ Clients!</h3>
                                    <button className="btn">Download Annual Report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;