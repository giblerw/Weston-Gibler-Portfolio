import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container";
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header className="container" />
          <Container className="container" />
        </div>
      </Router>
    )
  }
};

export default App;
