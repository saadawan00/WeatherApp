import React, { component } from "react";
import { Layout } from "antd";
import { Input, Icon, Button } from "antd";

import "../App";

const { Header, Footer, Content } = Layout;

const userName = "saadawan";
const userPassword = "abcd";

const LoginCheck = props => {
  //   return props.name == userName && props.password == userPassword ? (
  //     <h1>Successgully logged in</h1>
  //   ) : (
  //     <h1>wrong username and pass</h1>
  //   );
  console.log("hi loginCheck");
  return props.name == userName && props.password == userPassword
    ? console.log("Successgully logged in")
    : console.log("wrong username and pass");
};

const Login = () => {
  let name = "";
  let password = "";
  const handleChange = e => {
    e.target.name = e.target.value;
  };

  return (
    <Layout className="App">
      {/* <Header className="App-header">
        <h1>Weather Broadcast</h1>
      </Header> */}
      <Content className="App-content">
        <Input
          name="name"
          className="App-input"
          placeholder="Enter Username"
          onChange={handleChange}
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <br />
        <Input
          name="password"
          className="App-input"
          placeholder="Enter Password"
          onChange={handleChange}
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
          href="https://www.facebook.com"
          type="primary"
          shape="circle"
          onSubmit={<LoginCheck name={name} password={password} />}
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
