import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'mdbreact';
import { projects } from './ProjectData';

const NotMobilePictureFrame = ({project}) => (
  <div className="col-lg-4 col-md-6 d-flex flex-lg-column flex-row justify-content-start project-left">
    <div className="col-12 cover_img1 d-flex flex-column justify-content-center">
      <img src={project.photos[0]} alt="project cover" className="img-fluid"/>
    </div>
    <div className="col-12 cover_img2 d-flex flex-column justify-content-center">
      <img src={project.photos[1]} alt="project cover" className="img-fluid"/>
    </div>
  </div>
  )

const MobilePictueFrame = ({project}) => (
  <div className="col-lg-4 col-md-6 d-flex flex-lg-column project-left">
    <div className="col-12 d-flex flex-row justify-content-center">
      <img src={project.photos[0]} alt="project cover" className="img-fluid cover_img_full align-self-center"/>
    </div>
  </div>
  )

const ActionButtons = ({project}) => {
    return(
      <div class="btn-group" role="group" aria-label="Project Actions d-flex">
        {project.github !== null ?
            <Button href={project.github} alt="github repo" target="_blank" className=" btn pro_butt gitActive">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i> Source Code</Button> :
            <Button href={project.github} alt="github repo" target="_blank" className=" btn btn-blue-grey pro_butt disabled">
            <i className="fa fa-ban fa-2x" aria-hidden="true"></i> Private Repo</Button>
        }

        {project.url !== null ?
              <Button href={project.url} alt="Live Website" target="_blank" color="info" className="btn pro_butt">
              <i className="fa fa-desktop fa-2x" aria-hidden="true"></i> Visit Website</Button>:
              <Button href={project.url} alt="Live Website" target="_blank" color="blue-grey" className="btn btn-info-color-dark pro_butt disabled">
              <i className="fa fa-ban fa-2x" aria-hidden="true"></i> No Website</Button>
        }
      </div>
    )
  }



class Projects extends Component {
  render() {
    return(
      <div className="container-fluid projects_content" id="projects">
      <span className="row section_header projects_header">
        <div className="header_mask">
        <img className="header_logo" src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/initialsBig.png" alt="golden_ratio" />
        <u>Projects</u>
        </div>
      </span>
      {projects.map(project => {
        const myStack = project.stack;
        const tallScreen = project.mobile;
        return (
          <div className="row project_row d-flex justify-content-around" key={project.objectId}>
            {tallScreen === true ? <MobilePictueFrame project={project} /> : <NotMobilePictureFrame project={project} />}
            <div className="col-md-8 project-center">
              <div className="d-inline-block text-truncate d-flex justify-content-between align-items-center app_title">
                <span className="dark-title-text project-title">
                {project.title}
                </span>
                <span className="action-buttons">
                  <ActionButtons project={project} />
                </span>
              </div>
              <div className="row project_content_row">
                <div className="col-lg-6 project_content-right">
                  <div className="row project_info_content">
                    <blockquote className="blockquote light-grey-text">
                      <p className="text-left">{project.info}</p>
                      <p className="bq-title">{project.format}</p>
                    </blockquote>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 project_content-center text-left d-flex flex-column align-items-end">
                  <div className="row project_info_titles">
                    <em className="stack-label">Tech Stack</em>
                  </div>
                  <ListGroup className="row project_info_content flex-row justify-content-stretch">
                    {myStack.map(tech => {
                      return(
                        <ListGroupItem href={tech.url} target="_blank" hover className="p-1 d-inline-block text-truncate d-flex flex-column align-self-center techItem">
                          {tech.name}
                        </ListGroupItem>
                        )}
                      )}
                  </ListGroup>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8 project_content-left d-flex flex-column justify-content-between">
                  <Button className="row btn btn-indigo gallery">
                  <i className="fa fa-photo fa-2x" aria-hidden="true"></i> Photo Gallery
                  </Button>
                  <div className="row project_badge">
                    <img src={project.icon} alt="content logo" className="img-fluid project_content_logo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
      }
      </div>
    )
  }
}

export default Projects;
