import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global-styles";

import Header from "./components/Header/Header";
import Container from "./components/Container";

const App = () => (
  <Router>
    <div>
      <Header />
      <Container />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
