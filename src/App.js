import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import Login from "./components/Login";
import Weather from "./components/Weather";
// import Routes from "./components/Routes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
// import SideNav from "./components/SideNav";

// IMPORTS END HERE

const { Header, Footer, Content, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Icon
              className="trigger App"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <NavLink to="/" />
                <Icon type="home" />
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/login" />
                <Icon type="user" />
                <span>Login</span>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/weather" />
                <Icon type="cloud" />
                <span>Weather</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Header className="App-header">
              {/* <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            /> */}
              <h1 className="App">Weather Broadcast</h1>
            </Header>

            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/weather" component={Weather} />
            </Switch>

            <Content className="App-content App">
              Welcome to Weather Broadcast. An exclusive place for your weather
              queries.
            </Content>

            <Footer className="App-footer App">
              &copy; All Rights Reserved to Weather Broadcast 2019
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
