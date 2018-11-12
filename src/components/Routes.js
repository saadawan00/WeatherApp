import React, { Component } from "react";
import Login from "./Login";
import App from "../App.js";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  console.log("roustes.js");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/login" component={Login} />
        <Navigation />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
