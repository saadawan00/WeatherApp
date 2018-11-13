import React, { Component } from "react";
import { Input, Icon, Button, Layout } from "antd";
import Navigation from "./Navigation";
import { Redirect } from "react-router-dom";

import "../App";

const { Header, Footer, Content } = Layout;

const userName = "sa";
const userPassword = "asd";

class Login extends Component {
  state = {
    name: "",
    password: "",
    isLoggedIn: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { name, password } = this.state;

    name == userName && password == userPassword
      ? this.setState({
          isLoggedIn: true
        })
      : console.log("add validationa");
  };
  render() {
    return (
      <Layout className="App">
        {/* <Navigation /> */}
        <Content className="App-content">
          <Input
            name="name"
            className="App-input"
            placeholder="Enter Username"
            onChange={this.handleChange}
            prefix={
              <Icon
                type="user"
                theme="outlined"
                spin={false}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
          />
          <br />
          <Input
            name="password"
            className="App-input"
            placeholder="Enter Password"
            onChange={this.handleChange}
            prefix={
              <Icon
                type="lock"
                theme="outlined"
                spin={false}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
          />
          <br />
          <Button
            type="primary"
            shape="circle"
            onClick={this.handleSubmit}
            prefix={<Icon type="login" theme="outlined" />}
          >
            <Icon type="login" theme="outlined" />
          </Button>
          {/* <LoginCheck /> */}
          {this.state.isLoggedIn == true ? (
            <Redirect from="/login" to="/weather" />
          ) : (
            <div />
          )}
        </Content>
      </Layout>
    );
  }
}

export default Login;
