import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Container, HamburgerToggler } from 'mdbreact';

import '../../styles/Header.sass';

class Header extends Component {

  state = {
    collapse1: false,
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }
render() {
  return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
      <a className="navbar-brand" href="westongibler.com">Logo</a>
        <ul className="navbar-nav">
          <li className="col nav-item">
            <Link className="nav-link" to="/">Home</Link>
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
