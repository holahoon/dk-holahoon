import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "containers/Home";
import Works from "containers/Works";
import Blog from "containers/Blog";
import About from "containers/About";
// import ProjectPage from "components/projectPage/ProjectPage";

function AppRouter() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/works/:projectId' component={ProjectPage} /> */}
        <Route path='/works' component={Works} />

        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
      </Switch>
    </>
  );
}

export default AppRouter;
