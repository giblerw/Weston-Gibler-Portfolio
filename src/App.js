import React, { Component } from 'react';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App parallax">
        <div className="container content">
            <Nav
            className="row"
            />

            <Welcome className="row"/>

            <About className="row" />

            <Projects className="row" />

            <CV className="row" />

            <Footer className="row" />
        </div>
      </div>
    );
  }
}

export default App;
