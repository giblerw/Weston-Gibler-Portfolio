import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';

import Home from "./Home/Home";
import Work from "./Work/Work";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 400,
    beforeChildren: true
  },
  exit: {
    opacity: 0,
    delay: 500,
  }
});

const Container = ({ location }) => {
  return (
    <PoseGroup>
      <RouteContainer key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Home} key="home"/>
          <Route path="/work" component={Work} key="work"/>
          <Route path="/profile" component={Profile} key="profile"/>
          <Route path="/skills" component={Skills} key="skills"/>
          <Route path="/contact" component={Contact} key="contact"/>
        </Switch>
      </RouteContainer>
    </PoseGroup>
  );
}

export default withRouter(Container);
