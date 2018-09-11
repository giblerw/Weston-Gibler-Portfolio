import React from 'react';

const Welcome = () => (
  <div className="welcome-row" id="home">
    <div className="buffer"></div>
    <div className="photo">
      <div className="img photo-div"/>
    </div>
    <div className="intro">
      <h1 className="h1-responsive text-left">My name is <b className="larger-text-bump">Weston.</b></h1>
    </div>
    <div className="title">
      <h2 className="h2-responsive text-left">I am a <em>Full Stack</em>, <b className="larger-text-bump">Web & iOS,</b> Software Developer.</h2>
    </div>
  </div>
)

export default Welcome;
