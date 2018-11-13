import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

class SideNav extends Component {
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
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>Login</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="cloud" />
              <span>Weather</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
        </Layout>
      </Layout>
    );
  }
}

export default SideNav;
