import React, { Component } from "react";
import { Layout } from "antd";
import Login from "./components/Login";
import Weather from "./components/Weather";
import Routes from "./components/Routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";

// IMPORT ENDS HERE

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="App">
        <Header className="App-header">
          <h1>Weather Broadcast</h1>
        </Header>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/weather" component={Weather} />
            <Navigation />
          </Switch>
        </Router>

        <Content className="App-content">
          Welcome to Weather Broadcast. An exclusive place for your weather
          queries.
        </Content>

        <Footer className="App-footer">
          &copy; All Rights Reserved to Weather Broadcast 2019
        </Footer>
      </Layout>
    );
  }
}

export default App;
