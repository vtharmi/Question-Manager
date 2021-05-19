import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import NotFoundPage from "./pages/not_found_page";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
