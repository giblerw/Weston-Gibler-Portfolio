import React from "react";
import './style.css';

const Divider = () => {
  return (
    <div className="divider"></div>
  )
};

function Profile() {
  return (
    <div className="container profile-container" >
      <div className="row title profile-title">About Me</div>
      <div className="container icons-container">
      <Divider className="row"/>
      <div className="row profile-traits-row">
        <div className="col-md-3 profile-traits-col">
          <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder image" className="profile-icon"/>
          <div className="icon-title">Icon Title</div>
          <p className="icon-text">Praesent eu lorem euismod, convallis nisl in, cursus metus. Cras dolor eros, fringilla id</p>
        </div>
        <div className="col-md-3 profile-traits-col">
          <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder image" className="profile-icon"/>
          <div className="icon-title">Icon Title</div>
          <p className="icon-text">Praesent eu lorem euismod, convallis nisl in, cursus metus. Cras dolor eros, fringilla id</p>
        </div>
        <div className="col-md-3 profile-traits-col">
          <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder image" className="profile-icon"/>
          <div className="icon-title">Icon Title</div>
          <p className="icon-text">Praesent eu lorem euismod, convallis nisl in, cursus metus. Cras dolor eros, fringilla id</p>
        </div>
        <div className="col-md-3 profile-traits-col">
          <img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/800x800_Placeholder.png" alt="placeholder image" className="profile-icon"/>
          <div className="icon-title">Icon Title</div>
          <p className="icon-text">Praesent eu lorem euismod, convallis nisl in, cursus metus. Cras dolor eros, fringilla id</p>
        </div>
      </div>
      <Divider className="row"/>
      </div>
    </div>
  );
}

export default Profile;
