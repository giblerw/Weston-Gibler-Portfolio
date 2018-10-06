import React from "react";

import './style.css';

function Contact() {

  return (
    <div className="container profile-container" >
      <div className="row col-8 title contact-title">
        Let's create something together!
      </div>
      <div className="row col-8 contact-subtitle">
        If you have a cool project to work on or you just want to have an interesting conversation, don't hesitate to contact me by clicking any one of the options below.
      </div>
      <div className="row contact-links">

        <div className="col contact-link">
          <a className="icon-button email" tabIndex="0" data-trigger="focus" type=" button" data-container="body" data-toggle="popover" data-placement="left" title="Email Me" data-content="WestonGibler@gmail.com"><img className="icon-email" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/Icons/social/Asset+3.png" alt="emailLink" /><span></span></a>
        </div>

        <div className="col contact-link">
          <a href="https://www.facebook.com/weston.gibler?ref=bookmarks" target="_blank" rel="noopener noreferrer" className="icon-button facebook"><img className="icon-facebook" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/Icons/social/Asset+6.png" alt="facebok" /><span></span></a>
        </div>

        <div className="col contact-link">
          <a href="https://github.com/giblerw" className="icon-button github"><img target="_blank" rel="noopener noreferrer" className="icon-github" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/Icons/social/githubWire.png" alt="github" /><span></span></a>
        </div>

        <div className="col contact-link">
          <a href="https://www.linkedin.com/in/giblerw/" className="icon-button linked"><img target="_blank" rel="noopener noreferrer" className="icon-linked" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/Icons/social/Linkedin_Border.png" alt="linked" /><span></span></a>
        </div>

      </div>
      <div className="row col-8 title contact-footer">
        Thanks for stopping by!
      </div>
    </div>
  );
}

export default Contact;
