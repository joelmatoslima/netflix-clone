import React from "react";
import Login from "./pages/Login";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>     
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home /> 
      </Route>
    </Switch>
  );
}

export default App;
