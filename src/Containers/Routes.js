import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Loading } from "../Components/Loading";

const Home = React.lazy(() => import("../Views/Home"));

const Routes = () => {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to={{ pathname: "/home" }} />}
          />
          <Route
            path="/home"
            component={Home}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default Routes;
