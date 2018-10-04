import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Container, HamburgerToggler } from 'mdbreact';

import './styles.css'

class Header extends Component {

render() {
  return (
    <nav id="header" className="navbar navbar-expand-sm bg-transparent justify-content-left">
        <ul className="navbar-nav">
          <li className="col nav-item">
            <Link className="nav-link" to="/">
            <img id="brand" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initials.png" alt="Logo" />
            </Link>
          </li>

          <li className="col nav-item">
            <Link className="nav-link" to="/work">Work</Link>
          </li>

          <li className="col nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>

          <li className="col nav-item">
            <Link className="nav-link" to="/skills">Skills</Link>
          </li>

          <li className="col nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
      </ul>
    </nav>
  );
}
}
export default Header;
