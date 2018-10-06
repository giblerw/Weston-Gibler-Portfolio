import React from "react";
import { Link } from "react-router-dom";
import posed from 'react-pose';

import './style.css';

const P1 = posed.h1({
  enter: { x: 0, y: 0, opacity: 1, delay: 300 },
  exit: { x: -1000, y: 1000, opacity: 0, delay: 100 }
});
const P2 = posed.h1({
  enter: { x: 0, opacity: 1, delay: 500 },
  exit: { x: -1550, opacity: 0, delay: 300 }
});

function Home() {
  return (
    <div className="container-fluid home-container">
      <div className="title home-text">
      <P1 key={1}>My name is Weston Gibler.</P1>
      <P2 key={2}>I'm a full stack, Web and iOS developer.</P2>
      </div>
      <section>
        <Link to="/work"><img src="https://s3.us-east-2.amazonaws.com/weston-gibler-portfolio/bending-arrow.jpg" alt="next" className="nextButton"/></Link>
      </section>
    </div>
  );
}

export default Home;
