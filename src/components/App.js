import React from 'react';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import Decoration from './Decoration';
import Question from './Question';
import Reviews from './Reviews';
import Partners from './Partners';
import Communication from './Communication';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Banner></Banner>
      <Services/>
      <Decoration/>
      <Question/>
      <Reviews/>
      <Partners/>
      <Communication/>
      <Footer/>

    </React.Fragment>
  );
}

export default App;
