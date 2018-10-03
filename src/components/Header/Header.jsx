import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Container, HamburgerToggler } from 'mdbreact';

import './style.css';

function Header() {
  return (
    <Wrapper>
      <ul id="hamberger-toggler">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
`;

export default Header;
