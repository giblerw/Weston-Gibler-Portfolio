import React, { Component } from 'react';
import {
  Navbar,

  NavbarNav,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Mask,
  View,
  } from 'mdbreact';

  // import { NavLink } from 'react-router-dom'

  // import { BrowserRouter as Router } from 'react-router-dom';

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

const Initials = () => (
  <div className="row align-items-center">
    <img className="initials_icon" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initials.png" alt="githubIcon" />
  </div>
)

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            active: 1,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            // <Router>
              <div>
                <Navbar id="navbar" expand="md" fixed="top" transparent scrolling className="h6-responsive">
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                      <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavbarBrand>
                            <Initials/>
                          </NavbarBrand>
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
                </div>
            // {/* </Router> */}
        );
    }
}

export default Nav;
