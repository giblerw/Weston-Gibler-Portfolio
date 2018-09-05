import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className="about_content row">
        <div className="col-md-3 about-left">Left</div>
        <div className="col-md-6 about-center">Center</div>
        <div className="col-md-3 about-right">Right</div>
      </div>
    )
  }
}

export default About;
