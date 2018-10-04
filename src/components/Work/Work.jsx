import React from "react";
import "./style.css";

const ProjectDivider = () => {
  return (
    <div className="divider"></div>
  )
};

const Work = () => {
  return (
    <div className="container work-container">
      <div className="row title work-title">Projects</div>
      <div className="row work-subtitle"><p>Below are some of the projects I have worked, or am still currently working on. Vivamus non erat at nunc egestas sagittis eget ac urna. Proin ac iaculis ante. Proin tincidunt ipsum eu pharetra.
      </p>
      </div>

      <div className="container project-gallery">
      <ProjectDivider />
        <div className="row gallery-row">
          <div className="col-md-2 side"></div>
          <div className="col-md-8 main">
            <div className="project-title">Project Title</div>
            <div className="title-divider"></div>
            <div className="project-caption">Some stuff about the project. Morbi sodales at enim sed porttitor. Vestibulum vitae magna consequat,
            faucibus felis non, fermentum lorem. Vivamus viverra est justo.
            Suspendisse lacus nisi, ornare gravida lorem sit amet, iaculis
            vulputate elit. Vivamus non erat at nunc egestas sagittis eget ac
            urna. Proin ac iaculis ante. Proin tincidunt ipsum eu pharetra.</div>
            <div className="project-button-group">
              <span>
                <button className="project-btn">button 1</button>
                <button className="project-btn">button 2</button>
                <button className="project-btn">button 3</button>
              </span>
            </div>
            <div><img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder project image" className="project-image"/></div>
          </div>
          <div className="col-md-2 side"></div>
        </div>
        <ProjectDivider />
      </div>
    </div>
  );
}

export default Work;
