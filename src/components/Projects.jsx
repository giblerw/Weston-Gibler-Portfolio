import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return(
      <div className="projects_content">
        <div className="row project_row_left">
          <div className="col-md-3 project-left">walkthrough</div>
          <div className="col-md-9 project-center">content</div>
        </div>
        <div className="row project_row_right">
          <div className="col-md-9 project-center">content</div>
          <div className="col-md-3 project-right">walkthrough</div>
        </div>
        <div className="row project_row_left">
          <div className="col-md-3 project-left">walkthrough</div>
          <div className="col-md-9 project-center">content</div>
        </div>
        <div className="row project_row_right">
          <div className="col-md-9 project-center">content</div>
          <div className="col-md-3 project-right">walkthrough</div>
        </div>
        <div className="row project_row_left">
          <div className="col-md-3 project-left">walkthrough</div>
          <div className="col-md-9 project-center">content</div>
        </div>
      </div>
    )
  }
}

export default Projects;
