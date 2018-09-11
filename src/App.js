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
      <div className="App parallax" data-spy="scroll" data-target=".navbar" data-offset="50">
        <div className="container-fluid content" >
            <Nav className="row layout_section" />

            <Welcome className="row layout_section"/>

            <About className="layout_section"/>

            <Projects className="layout_section"/>

            <CV className="layout_section"/>

            <Footer className="layout_section" />
        </div>
      </div>
    );
  }
}

export default App;
