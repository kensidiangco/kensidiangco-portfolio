import React from 'react';
import './static/App.css';
import TopBar from './TopBar';
import app__header from './img/app__header.png';
import Section2 from './app__section2';
import Footer from './footer';
import Gallery from './gallery';

function App() {
  return (
    <div className="app">
      <TopBar />
      <div id="header" className="app__header">
      	<img className="app__image" src={app__header} alt="header" />
      </div>

      <Section2 />

      <Gallery />

      <Footer />
    	
    </div>
  );
}

export default App;