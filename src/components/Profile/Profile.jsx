import React, { Component } from "react";
import { traits } from '../ProjectData';
import './style.css';

const Divider = () => {
  return (
    <div className="divider"></div>
  )
};

class Profile extends Component {
  render() {
    return (
      <div className="container profile-container" >
        <div className="row title profile-title">Guiding Principles</div>
        <div className="container icons-container">
        <Divider />
        <div className="row">
          {traits.map(trait => {
            return(
              <div className="col-md-3 profile-traits-col">
              <div className="icon-title">{trait.title}</div>
                <img src={trait.icon} alt="placeholder" className="profile-icon"/>
                <p className="icon-text">{trait.text}</p>
              </div>
            )
          })}
        </div>
        <Divider/>
        <div className="row">
          <div className="col-md-6 profile-section">
            <div className="profile-left" >
              <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/head.jpg" alt="placeholder" className="profile-photo"/>
            </div>
          </div>
          <div className="col-md-6 profile-section center">

            <blockquote className="blockquote profile-blockquote">
            <p className="uppercase mission-header"><b>Personal Mission:</b></p><p className="mission-text"> Maintain an insatiable willingness to be incessantly learning.
            </p>
            </blockquote>

          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 profile-section">

            <span className="profile-section-header">I’ve always sought out opportunities and challenges that are truely meaningful to me. As a result, my professional path has taken many twists and turns —</span>

            <div className="profile-left-text profile-blockquote" >
              <blockquote className="blockquote profile-blockquote-lg">
              From conducting neurophysiological research at the University of Colorado to mastering heavy forklift maneuvering, to maintaining daily operations of a 30,000 sq.ft. warehouse facility and a diesel fleet mechanic, to marketing director and business development lead, to a structural metal fabricator and skilled woodworker, to a small business owner and entrepreneur
              </blockquote>
            </div>
          </div>
          <div className="col-lg-6 profile-section">
            <div className="profile-right" >
            <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/problems.jpg" alt="placeholder" className="profile-photo-2"/>
            </div>
          </div>
        </div>
        <div className="row col-12">
          <span className="row profile-section-header profile-section-footer">— I've never stopped engaging my passion to help others and solve problems.</span>
        </div>
        </div>
      </div>


    );
  }
}
export default Profile;
