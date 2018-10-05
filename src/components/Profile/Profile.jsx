import React from "react";
import './style.css';

const Divider = () => {
  return (
    <div className="divider"></div>
  )
};

const TraitCard = () => {
  return(
    <div className="col-md-3 profile-traits-col">
    <div className="icon-title">Icon Title</div>
      <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder" className="profile-icon"/>
      <p className="icon-text">Praesent eu lorem euismod, convallis nisl in, cursus metus. Cras dolor eros, fringilla id</p>
    </div>
  )
}

function Profile() {
  return (
    <div className="container profile-container" >
      <div className="row title profile-title display-5">About Me</div>
      <div className="container icons-container">
      <Divider />
      <div className="row">
        <TraitCard />
        <TraitCard />
        <TraitCard />
        <TraitCard />
      </div>
      <Divider/>
      <div className="row">
        <div className="col-md-6 profile-section">
          <div className="profile-left" >
            <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder" className="profile-photo"/>
          </div>
        </div>
        <div className="col-md-6 profile-section">

          <div>
          <p className="profile-right-text">
          I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns —</p>
          <blockquote className="blockquote">
          From conducting neurophysiological research at the University of Colorado to mastering heavy forklift maneuvering, to maintaining all operations of a 30,000 sq.ft. warehouse facility and diesel fleet mechanic, to marketing director and business development lead, to a structural metal fabricator and skilled woodworker, to a small business owner and entrepreneur
          </blockquote><p className="profile-right-text">
          — I've never stopped engaging my passion to help others and solve problems.
          </p>
          </div>
          <Divider/>
          <blockquote className="blockquote profile-section-subheader">
          <p className="uppercase mission-header"><b>My Mission:</b></p><p className="mission-text"> Maintain an insatiable willingness to be incessantly learning, until death.
          </p>
          </blockquote>

        </div>
      </div>
      <Divider />
      <div className="row">
        <div className="col-md-6 profile-section">
          <span className="profile-section-header">Section Header</span>
          <Divider />
          <div className="center profile-left-text" >
            Left
          </div>
        </div>
        <div className="col-md-6 profile-section">
          <div className="profile-right" >
          <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder" className="profile-photo"/>
          </div>
        </div>
      </div>
      <Divider/>
      </div>
    </div>
  );
}

export default Profile;
