import React, { Component } from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Decoration from '../components/Decoration';
import Question from '../components/Question';
import Reviews from '../components/Reviews';
import Partners from '../components/Partners';
import Communication from '../components/Communication';
import Footer from '../components/Footer';
import Header from '../components/Header';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Banner></Banner>
                <Services />
                <Decoration />
                <Question />
                <Reviews />
                <Partners />
                <Communication />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;