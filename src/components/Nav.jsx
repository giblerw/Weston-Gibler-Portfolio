import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  } from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';

const Socials = () => (
  <li className="social-icons">
  <a href="https://github.com/giblerw" className="github"></a>
  <a href="https://www.linkedin.com/in/giblerw/" className="linked"></a>
  </li>
)

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar light expand="md" fixed="top" scrolling>
                    <NavbarBrand className="logo" href="/"></NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem>
                              <NavLink to="#">About Me</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Projects</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>R&#233;sum&#233;</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Modal View</DropdownItem>
                                    <DropdownItem href="#">Download PDF</DropdownItem>
                                    <DropdownItem href="#">Download PNG</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                          <Socials className="social_icons"/>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default Nav;
