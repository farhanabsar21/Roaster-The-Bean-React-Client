import React from 'react';
import Navigation from './Navigation/Navigation';
import "./Header.css";
import HeaderMain from './HeaderMain/HeaderMain';
import Social from './Social/Social';

const Header = () => {
    return (
        <div className="header py-5">
            <Navigation></Navigation>
            <HeaderMain></HeaderMain>
            <Social></Social>
        </div>
    );
};

export default Header;