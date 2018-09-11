import React, { Component } from 'react';

class CV extends Component {
  render() {
    return(
      <div className="cv_section" id="resume">
        <span className="row section_header resume_header">
          <div className="header_mask">
          <img className="header_logo" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initialsBig.png" alt="golden_ratio" />
          <u>R&#233;sum&#233;</u>
          </div>
        </span>
        <div className="cv_content">
          <div className="resume"></div>
        </div>
      </div>
    )
  }
}

export default CV;
