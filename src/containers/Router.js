import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import WrapperScrollToTop from "components/wrapperScrollToTop/WrapperScrollToTop";
import Home from "containers/Home";
import Works from "containers/Works";
import Blog from "containers/Blog";
import About from "containers/About";
import ProjectPage from "components/projectPage/ProjectPage";

function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <WrapperScrollToTop>
        <Switch location={location} key={location.key}>
          <Route path='/' exact component={Home} />
          <Route path='/works' exact component={Works} />
          <Route path='/works/:projectId' component={ProjectPage} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
        </Switch>
      </WrapperScrollToTop>
    </AnimatePresence>
  );
}

export default AppRouter;
