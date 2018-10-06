import React, { Component } from "react";
import { Link } from "react-router-dom";

import './styles.css'

class Header extends Component {

render() {
  return (
    <nav id="header" className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between" >
      <Link className="navbar-brand" to="/">
      <img id="brand" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initials.png" alt="Logo" />
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDiv" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDiv">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link" to="/work">Work</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/skills">Skills</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
      </ul>
      </div>
    </nav>
  );
}
}
export default Header;
