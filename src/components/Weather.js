import React, { Component } from "react";
import { Icon, Button } from "antd";
import Navigation from "./Navigation";
import "../App.css";
import WeatherView from "./WeatherView";
import Search from "antd/lib/input/Search";

class Weather extends Component {
  state = {
    cityName: "",
    isButtonClicked: false
  };
  handleSubmit = e => {
    this.setState({
      cityName: e,
      isButtonClicked: true
    });
    console.log("handleSUbmit");
  };

  render() {
    const { cityName, isButtonClicked } = this.state;
    return (
      <div className="App">
        <Search
          className="App-input"
          placeholder="Search City"
          enterButton={<Icon type="search" theme="outlined" />}
          size="large"
          // onSearch={value => {
          //   this.setState({
          //     cityName: value,
          //     isButtonClicked: true
          //   });
          // }}
          onSearch={value => this.handleSubmit(value)}
        />
        {isButtonClicked == true ? (
          <WeatherView cityName={cityName} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default Weather;
