import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Header className="container"/>
          <Container className="container"/>
        </div>
      </Router>
    )
  }
};

export default App;
