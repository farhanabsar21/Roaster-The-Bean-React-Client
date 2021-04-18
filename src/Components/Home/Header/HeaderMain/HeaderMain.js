import React from 'react';
import { Link } from 'react-router-dom';
import "./HeaderMain.css";

const HeaderMain = () => {
    return (
        <main className="header-main d-flex align-items-center justify-content-center">
            <div className="container row">
                <div className="main-content col-md-12 text-center">
                    <h1>Welcome To The ROAST.</h1>
                    <h4 className="mb-3">Best Roasted Beans Around The World</h4>
                    <Link to="/user/userOrders"><button className="btn">Order Now</button></Link>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;