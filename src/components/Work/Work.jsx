import React, { Component } from 'react';
import { projects, appStore } from '../ProjectData';

import "./style.css";

const ProjectDivider = () => {
  return (
    <div className="divider"></div>
  )
};
const PrivateCode = () => {
  return (
    <button type="button" className="btn btn-default project-btn disabled">Private</button>
  )
};
const PublicCode = (props) => {
  const url = props.props.project.github
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-default project-btn ">Github</button></a>
  )
};
const NoWebsite = () => {
  return (
  <button type="button" className="btn btn-default project-btn disabled">Mobile Only</button>
  )
}
const Website = (props) => {
  const website = props.props.project.url
  return (

    <a href={website} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-default project-btn ">Website</button></a>
  )
}

const ProjectButtons = ({props}) => {
  const auth = props.project.isPrivate
  const webAddress = props.project.url
  return (
    <div>
    {(auth ? <PrivateCode /> : <PublicCode props={props}/> )}
    {webAddress === null ? <NoWebsite /> : <Website props={props} />}
    </div>
  )

}

class Work extends Component {
  projects = this.props;

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
            this.props = { project }
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
                    <ProjectButtons props={this.props} />
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
