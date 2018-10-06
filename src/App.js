import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import Container from "./components/Container";
import Header from './components/Header/Header';

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <FontAwesomeIcon icon="faStroopwafel"/>
          <Header className="container" />
          <Container className="container" />
        </div>
      </Router>
    )
  }
};

export default App;
