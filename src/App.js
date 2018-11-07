import React, { Component } from "react";
import { Layout } from "antd";
import Login from "./components/Login";

import "./App.css";

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="App">
        <Header className="App-header">
          <h1>Weather Broadcast</h1>
        </Header>
        <Login />
        {/* <Content className="App-content">
          Welcome to Weather Broadcast. An exclusive place for your weather
          queries.
        </Content> */}

        <Footer className="App-footer">
          &copy; All Rights Reserved to Weather Broadcast 2019
        </Footer>
      </Layout>
    );
  }
}

export default App;
