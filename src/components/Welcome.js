import React from 'react';

const Welcome = () => (
  <div className="welcome-row container-fluid" id="home">
    <div className="buffer"></div>
    <div className="photo row">
      <div className="row align-items-end photo-div_1">
        <img className="home_logo" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initials.png" alt="home_logo" />
      </div>
      <div className="row align-items-end photo-div_2">
        <img className="home_head" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/head.jpg" alt="home_logo" />
      </div>
    </div>
    <div className="intro">
      <h1 className="h1-responsive text-left">My name is <b className="larger-text-bump">Weston.</b></h1>
    </div>
    <div className="title">
      <h2 className="h2-responsive text-left">I am a Full Stack, <b className="larger-text-bump">Web & iOS</b> Software Developer.</h2>
    </div>
  </div>
)

export default Welcome;
