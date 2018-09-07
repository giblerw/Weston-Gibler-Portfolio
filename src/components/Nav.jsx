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
  Mask,
  View,
  } from 'mdbreact';

  import { BrowserRouter as Router } from 'react-router-dom';

const Socials = () => (
  <div className="row align-items-center social-icons">
    <a href="https://github.com/giblerw" className="github" target="_blank"></a>
    <a href="https://www.linkedin.com/in/giblerw/" className="linked" target="_blank"></a>
  </div>
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

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Router>
                <header>
                    <Navbar color="transparent" expand="md" fixed="top" scrolling className="h6-responsive">
                        <NavbarBrand className="logo" tag="span"></NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav left className="d-flex">
                            <NavItem>
                                <NavLink to="#aboutMe" href="#aboutMe" className="nav-item-text">About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#" className="nav-item-text">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle nav caret className="nav-item-text">R&#233;sum&#233;</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#">Modal View</DropdownItem>
                                        <DropdownItem href="#">Download PDF</DropdownItem>
                                        <DropdownItem href="#">Download PNG</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                            
                            <Socials className="social_icons"/>
                            </NavbarNav>
                        </Collapse>
                    </Navbar>

                    <View src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/back6.jpg">
                        <Mask overlay="purple-light" style={{flexDirection: 'column'}} className="flex-start text-white text-center">
                        <h1>My name is, Weston.</h1>
                        </Mask>
                    </View>
                </header>
            </Router>
        );
    }
}

export default Nav;
