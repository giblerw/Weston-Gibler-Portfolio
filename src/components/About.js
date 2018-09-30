import React, { Component } from 'react';

const me =
  {
    whatIBring: [
      'Expert in web markup, including HTML5, CSS3 and javascript.',
      'Expert understanding of client-side scripting and javascript frameworks such as React and Redux.',
      'Proficient understanding of server-side CSS pre-processing platforms, such as LESS and SASS (I like SASS).',
      'Understanding of javascript pre-processing and packaging frameworks such as babel and webpack.',
      'Experience developing highly performant code and view layouts; able to diagnose performance bottlenecks',
      'Experience with asynchronous requests, partial page updates, and AJAX.',
      'I\'m handy with adobe photoshop and illustrator.',
      'Awareness of cross-browser compatibility issues and workarounds.',
      'Understanding of integrated development practices and experience directly collaborating with design teams',
      'Excellent communication skills, and experience in collaborative environments.',
      'Years of managing experience; I\'m a pretty good guy to work with.',
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
    iOS: [
      'Experience developing native iOS apps in Swift and some Objective-C.',
      'Experience with networked applications and API delivery/consumption.',
      'I have published personal apps on the app store.',
      'Knowledge of iOS design patterns, frameworks and guidelines.',
      'Experience with offline storage, threading, and performance tuning.',
      'A familiarity with the iOS tool ecosystem for development, testing, debugging, and performance benchmarking.',
      'Interested in privacy and the protection of personal information.',
    ],
  }


class About extends Component {

  render() {
    return(
      <div id="about">
        <span className="row section_header">
          <div className="header_mask">
            <img className="header_logo" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initialsBig.png" alt="golden_ratio" />
            <u>About Me</u>
          </div>
        </span>

        <div className="row about_content">
          <div className="col-md-3 about-left">
            <span><h3>I am cursed by an insatiable need to be incessantly learning...</h3><br/>
              <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/axHead.png" alt="axMan" className="about_img1" />
              <br /><h3>...and I&#39;m generally much happier than this picture would lead you to believe.</h3>
            </span>
          </div>
          <div className="col-md-5 about-center">
            <h2 className="about_header1">Web specific skills:</h2>
            <blockquote className="about_bring_text">
              <ul>
                {me.whatIBring.map((note, index) => <li key={index} className="h5-responsive">{note}</li>)}
              </ul>
            </blockquote>
          </div>
          <div className="col-md-4 about-right">
            <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/swift.png" alt="swiftLogo" className="swiftLogo" />
            <h2 className="about_header2">iOS specific skills:</h2>
            <div className="about_want_text">
              <ul>
                {me.iOS.map((point, index) => <li key={index} className="h5-responsive">{point}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
