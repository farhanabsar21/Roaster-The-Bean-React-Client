import React from 'react';
import About from './About/About';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Newsletter from './Newsletter/Newsletter';
import Projects from './Projects/Projects';
import Review from './Reviews/Review';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Review></Review>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;