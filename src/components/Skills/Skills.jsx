import React from "react";
import { skills } from '../ProjectData';

import './style.css';

const ProjectDivider = () => {
  return (
    <div className="divider"></div>
  )
};

function Skills() {
  let markup = skills.markup;
  let style = skills.style;
  let tools = skills.tools;
  let back = skills.back;
  let build = skills.build;
  let other = skills.other;

  return (
    <div className="container work-container">
      <div className="row title work-title">
      <span>Skills</span>
      <div className="row col divider"></div>
      </div>
      <ProjectDivider />
      <div className="container project-gallery">
      <div className="skills-rowheader">Web Markup</div>
      <div className="row">
        {markup.map(skill => {
          return(
            <div className="col-lg-3 col-md-4 skills-column">
              <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
              <div className="skill-icon-title">{skill.name}</div>
            </div>
          )
        })}
      </div>
      <ProjectDivider />
    </div>

    <div className="container project-gallery">
    <div className="skills-rowheader">UI Styling</div>

    <div className="row">
      {style.map(skill => {
        return(
          <div className="col-lg-3 col-md-4 skills-column">
            <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
            <div className="skill-icon-title">{skill.name}</div>
          </div>
        )
      })}
    </div>
    <ProjectDivider />
  </div>

  <div className="container project-gallery">
  <div className="skills-rowheader">Multi-Paradigm</div>

  <div className="row">
    {tools.map(skill => {
      return(
        <div className="col-lg-3 col-md-4 skills-column">
          <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
          <div className="skill-icon-title">{skill.name}</div>
        </div>
      )
    })}
  </div>
  <ProjectDivider />
</div>

<div className="container project-gallery">
<div className="skills-rowheader">Backend</div>

<div className="row">
  {back.map(skill => {
    return(
      <div className="col-lg-3 col-md-4 skills-column">
        <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
        <div className="skill-icon-title">{skill.name}</div>
      </div>
    )
  })}
</div>
<ProjectDivider />
</div>

<div className="container project-gallery">
<div className="skills-rowheader">Build Tools</div>

<div className="row">
  {build.map(skill => {
    return(
      <div className="col-lg-3 col-md-4 skills-column">
        <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
        <div className="skill-icon-title">{skill.name}</div>
      </div>
    )
  })}
</div>
<ProjectDivider />
</div>

<div className="container project-gallery">
<div className="icon-title skills-rowheader">The Others</div>
<div className="row">
  {other.map(skill => {
    return(
      <div className="col-lg-3 col-md-4 skills-column">
        <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
        <div className="skill-icon-title">{skill.name}</div>
      </div>
    )
  })}
</div>
<ProjectDivider />
</div>
  </div>
  );
}

export default Skills;
