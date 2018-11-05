import React, { Component } from 'react';
import Header from './header/Header';
import Home from './home/Home';
import Footer from './footer/Footer';

import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
