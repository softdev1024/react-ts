import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import Header from "./screens/Header";
import Home from "./screens/Home";
import Test from "./screens/Test";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
