import React, { component } from "react";
import { Layout } from "antd";
import { Input, Icon, Button } from "antd";

import "../App";

const { Header, Footer, Content } = Layout;

const name = "saadawan";
const password = "abcd";

const LoginCheck = props => {
  return props.name == name && props.password == password ? (
    <h1>Successgully logged in</h1>
  ) : (
    <h1>wrong username and pass</h1>
  );
};

const Login = () => {
  const name = "";
  const password = "";
  return (
    <Layout className="App">
      {/* <Header className="App-header">
        <h1>Weather Broadcast</h1>
      </Header> */}
      <Content className="App-content">
        <Input
          className="App-input"
          placeholder="Enter Username"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <br />
        <Input
          className="App-input"
          placeholder="Enter Password"
          prefix={
            <Icon
              type="lock"
              theme="outlined"
              style={{ color: "rgba(0,0,0,.25)" }}
            />
          }
        />
        <br />
        <Button
          type="primary"
          shape="circle"
          prefix={<Icon type="login" theme="outlined" />}
        >
          <Icon type="login" theme="outlined" />
        </Button>
      </Content>

      {/* <Footer className="App-footer">
        &copy; All Rights Reserved to Weather Broadcast 2019
      </Footer> */}
    </Layout>
  );
};

// return <Login />;

export default Login;
