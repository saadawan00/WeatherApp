import React, { Component } from "react";
import { Input, Icon, Button, Layout } from "antd";
import Navigation from "./Navigation";

import "../App";

const { Header, Footer, Content } = Layout;

const userName = "saadawan";
const userPassword = "abcd";

class Login extends Component {
  state = {
    name: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    console.log("submit");
    this.state.name == userName && this.state.password == userPassword
      ? console.log("success")
      : console.log("not logedin");
  };
  render() {
    return (
      <Layout className="App">
        {/* <Header className="App-header">
        <h1>Weather Broadcast</h1>
      </Header> */}
        <Navigation />
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
                spin={true}
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
                theme="twoTone"
                spin={true}
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
        </Content>

        {/* <Footer className="App-footer">
        &copy; All Rights Reserved to Weather Broadcast 2019
      </Footer> */}
      </Layout>
    );
  }
}

// return <Login />;

export default Login;
