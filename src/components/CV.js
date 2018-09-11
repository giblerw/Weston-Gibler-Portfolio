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
          <img type="button" data-toggle="modal" data-target="#resume_modal" className="resume"></img>
        </div>

        <div id="resume_modal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/WestonGiblerResume.png" alt="" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Download</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CV;
