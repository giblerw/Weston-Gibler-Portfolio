import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  Mask,
  View,
  } from 'mdbreact';

  import { BrowserRouter as Router } from 'react-router-dom';

const Socials = () => (
  <div className="row align-items-center social-icons">
    <a href="https://github.com/giblerw" className="github" target="_blank" rel="noopener noreferrer">
    <img className="github_icon" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/github-icon.png" alt="githubIcon" />
    </a>
    <a href="https://www.linkedin.com/in/giblerw/" className="linked" target="_blank" rel="noopener noreferrer">
    <img className="linkedin_icon" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/linkedin-icon.png" alt="linkinIcon" />
    </a>
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
                    <Navbar id="navie" expand="md" fixed="top" scrolling className="h6-responsive">
                        <NavbarBrand className="logo" tag="img" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initialsBig.png" alt=""></NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav center>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-transparent active nav-item-text">
                                    WDG
                                </label>
                                <label class="btn btn-transparent nav-item-text">
                                    About Me
                                </label>
                                <label class="btn btn-transparent nav-item-text">
                                    Projects
                                </label>
                                <label class="btn btn-transparent nav-item-text">
                                    R&#233;sum&#233;
                                </label>
                            </div>
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
