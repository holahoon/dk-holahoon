import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "containers/Home";
import Works from "containers/Works";
import Blog from "containers/Blog";
import About from "containers/About";
import ProjectPage from "components/projectPage/ProjectPage";

function AppRouter() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/works'>
          <Works />
        </Route>
        <Route path='/works/:projectId'>
          <ProjectPage />
        </Route>

        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default AppRouter;
