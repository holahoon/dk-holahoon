import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "containers/Home";
import Works from "containers/Works";
import Blog from "containers/Blog";
import About from "containers/About";

function AppRouter({ language }) {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Home language={language} />
        </Route>
        <Route path='/works'>
          <Works />
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
