import React, { Component } from 'react';

const me = 
  {
    whatIBring: [
      'A contagious need to be continually learning about new, emerging technologies/industry trends.',
      'Excellent communication skills, and experience in collaborative environments.',
      'Years of managing experience; I\'m a pretty good guy to work with.',
      'Expert in web markup, including HTML5, CSS3 and javascript.',
      'Expert understanding of client-side scripting and javascript frameworks such as React and Redux.',
      'Proficient understanding of server-side CSS pre-processing platforms, such as LESS and SASS (I like SASS).',
      'Understanding of javascript pre-processing and packaging frameworks such as babel and webpack.',
      'A solid understanding of Node.js.',
      'A handle on asynchronous request, partial page updates, and AJAX.',
      'I\'m handy with adobe photoshop and illustrator.',
      'Awareness of cross-browser compatibility issues and workarounds.',
      'I’ve been called a Git guru, but don\'t quote me.'
    ],
    whatIWant: [
      'Developing delightful UI features, by utilizing the most innovative, and scalable libraries available.',
      'Building shareable component libraries; emphasizing code readability, not just functionality',
      'Writing quality unit tests to facilitate debugging.',
      'Stretch the UI/UX designs, in a scalable way.',
      'Help set standards and best practices that make sense to the team.',
      'Make software that is lean and mean.',
      'Enjoy the people I work with.',
    ],
    techStack: {},
  }


class About extends Component {
  
  render() {
    return(
      <div className="about_content" id="about">
      <span className="row section_header about_header">
      <u>About Me</u>
      <img className="header_logo" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initialsBig.png" alt="golden_ratio" />
      </span>
        <div className="row">
          <div className="col-md-3 about-left">
            <h3>I am a <br/> Colorado native...<br/>
              <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/axHead.png" alt="axMan" className="about_img1" />
              <br /><h3>...and generally much happier than this picture would lead you to believe.</h3>
            </h3>
          </div>
          <div className="col-md-5 about-center">
            <h2 className="about_header1">Skills I bring as a developer...</h2>
            <blockquote className="about_bring_text">
              <ul>
                {me.whatIBring.map(note => <li className="h5-responsive">{note}</li>)}
              </ul>
            </blockquote>
          </div>
          <div className="col-md-4 about-right">
            <img className="about_triangle" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/gold.png" alt="triangle_logo" />
            <h2 className="about_header2">Current focuses include:</h2>
            <p className="about_want_text">
              <ul>
                {me.whatIWant.map(point => <li className="h5-responsive">{point}</li>)}
              </ul>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
