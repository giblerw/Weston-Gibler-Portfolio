import React, { Component } from 'react';
import { projects, appStore } from '../ProjectData';

import "./style.css";

const ProjectDivider = () => {
  return (
    <div className="divider"></div>
  )
};

class Work extends Component {
  render() {
    return (
      <div className="container work-container">
        <div className="row title work-title">Projects</div>

        <div className="container project-gallery">
        <ProjectDivider />
        <div className="project-subtitle text-muted">App Store Pubications</div>
        <div className="row">

          {appStore.map(app => {
            return(
              <div className="col-md-3 profile-traits-col">
                <a href={app.url} target="_blank"><img src={app.iconSrc} alt="placeholder" className="profile-icon"/></a>
                <div className="app-title">{app.title}</div>
              </div>
            )
          })}
        </div>
        <ProjectDivider />
          {projects.map(project => {
            return (
            <div className="row gallery-row" key={project.objectId}>
              <div className="col-md-2 side"></div>
              <div className="col-md-8 main">
                <div className="title-divider"></div>
                <div className="project-title">{project.title}</div>
                <div className="project-subtitle text-muted">"{project.tagLine}"</div>

                <div className="project-caption">{project.info}</div>
                <div className="project-button-group">
                  <span>
                    <button className="project-btn">Github</button>
                    <button className="project-btn">Website</button>
                    <button className="project-btn">Gallery</button>
                  </span>
                </div>
                <img src={project.mainPhoto} alt="project_img" className="project-image"/>
                <div className="title-divider"></div>
              </div>
              <div className="col-md-2 side"></div>
              <ProjectDivider />
            </div>
          )}
        )}
        </div>
      </div>
    )
  }
}

export default Work;

  // {projects.map(project => {
  //       const myStack = project.stack;
  //       const tallScreen = project.mobile;
  //       return (
  //         <div className="row project_row d-flex justify-content-around" key={project.objectId}>
  //           {tallScreen === true ? <MobilePictueFrame project={project} /> : <NotMobilePictureFrame project={project} />}
  //           <div className="col-md-8 project-center">
  //             <div className="d-inline-block text-truncate d-flex justify-content-between align-items-center app_title">
  //               <u>
  //               <span className="dark-title-text project-title header_text">
  //               {project.title}
  //               </span>
  //               </u>
  //               <span className="action-buttons">
  //                 <ActionButtons project={project} />
  //               </span>
  //             </div>
  //             <div className="row project_content_row">
  //               <div className="col-lg-6 project_content-right">
  //                 <div className="row project_info_content">
  //                   <blockquote className="blockquote light-grey-text">
  //                     <p className="bq-title"><em>{project.format}</em></p>
  //                     <p className="text-left">{project.info}</p>
  //                   </blockquote>
  //                 </div>
  //               </div>
  //               <div className="col-lg-3 col-md-5 project_content-center text-right d-flex flex-column align-items-end">
  //                 <div className="row project_info_titles">
  //                   <em className="stack-label">Tech Stack</em>
  //                 </div>
  //                 <ListGroup className="row project_info_content flex-row justify-content-stretch">
  //                   {myStack.map((tech, index) => {
  //                     return(
  //                       <ListGroupItem key={index} href={tech.url} target="_blank" hover className="p-1 d-inline-block text-truncate d-flex flex-column align-self-center techItem">
  //                         {tech.name}
  //                       </ListGroupItem>
  //                       )}
  //                     )}
  //                 </ListGroup>
  //               </div>
  //               <div className="col-lg-3 col-md-6 col-sm-8 project_content-left d-flex flex-column justify-content-between">
  //                 <ImageGallery project={project} />
  //                 <div className="row project_badge">
  //                   <img src={project.icon} alt="content logo" className="img-fluid project_content_logo"/>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )
  //     })
