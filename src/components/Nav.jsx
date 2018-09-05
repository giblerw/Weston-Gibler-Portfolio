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
  <span className="social-icons">
  <a href="" className="linked">1</a>
  <a href="" className="github">2</a>
  </span>
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
                        <NavbarNav left>
                          <Socials />
                        </NavbarNav>
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
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default Nav;
