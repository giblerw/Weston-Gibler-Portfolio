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
      Skills
      </div>

      <div className="container project-gallery">
      <div className="icon-title">Web Markup</div>

      <ProjectDivider />
      <div className="row">
        {markup.map(skill => {
          return(
            <div className="col-lg-2 col-md-4 skills-column">
              <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
              <div className="icon-title">{skill.name}</div>
            </div>
          )
        })}
      </div>
      <ProjectDivider />
    </div>

    <div className="container project-gallery">
    <div className="icon-title">UI Styling</div>
    <ProjectDivider />
    <div className="row">
      {style.map(skill => {
        return(
          <div className="col-md-3 profile-traits-col">
            <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
            <div className="icon-title">{skill.name}</div>
          </div>
        )
      })}
    </div>
    <ProjectDivider />
  </div>

  <div className="container project-gallery">
  <div className="icon-title">Multi-Paradigm</div>
  <ProjectDivider />
  <div className="row">
    {tools.map(skill => {
      return(
        <div className="col-md-3 profile-traits-col">
          <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
          <div className="icon-title">{skill.name}</div>
        </div>
      )
    })}
  </div>
  <ProjectDivider />
</div>

<div className="container project-gallery">
<div className="icon-title">Backend</div>
<ProjectDivider />
<div className="row">
  {back.map(skill => {
    return(
      <div className="col-md-3 profile-traits-col">
        <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
        <div className="icon-title">{skill.name}</div>
      </div>
    )
  })}
</div>
<ProjectDivider />
</div>

<div className="container project-gallery">
<div className="icon-title">Build Tools</div>
<ProjectDivider />
<div className="row">
  {build.map(skill => {
    return(
      <div className="col-md-3 profile-traits-col">
        <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
        <div className="icon-title">{skill.name}</div>
      </div>
    )
  })}
</div>
<ProjectDivider />
</div>

<div className="container project-gallery">
<div className="icon-title">The Others</div>
<ProjectDivider />
<div className="row">
  {other.map(skill => {
    return(
      <div className="col-md-3 profile-traits-col">
        <img src={skill.iconSrc} alt="placeholder" className="profile-icon"/>
        <div className="icon-title">{skill.name}</div>
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
