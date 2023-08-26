import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../shareComponents/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;