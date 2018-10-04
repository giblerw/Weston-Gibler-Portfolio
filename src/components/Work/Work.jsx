import React from "react";
import "./style.css";

const Work = () => {
  return (
    <div className="container work-container">
      <div className="row work-title">Projects</div>
      <div className="row work-subtitle"><p>Below are some of the projects I have worked, or am still currently working on.</p></div>
      <div className="container project-gallery">
        <div className="row gallery-row">
          <div className="col-3 side"></div>
          <div className="col-6 main">
            <div className="project-title">Project Title</div>
            <div className="title-divider">divider</div>
            <div className="project-caption">Some stuff about the project. Morbi sodales at enim sed porttitor. Vestibulum vitae magna consequat,
            faucibus felis non, fermentum lorem. Vivamus viverra est justo.
            Suspendisse lacus nisi, ornare gravida lorem sit amet, iaculis
            vulputate elit. Vivamus non erat at nunc egestas sagittis eget ac
            urna. Proin ac iaculis ante. Proin tincidunt ipsum eu pharetra.</div>
            <div className="project-buttons">
              <span>
                <button>button 1</button>
                <button>button 2</button>
              </span>
            </div>
            <div><img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder project image" className="project-image"/></div>
          </div>
          <div className="col-3 side"></div>
        </div>
      </div>
    </div>
  );
}

export default Work;
