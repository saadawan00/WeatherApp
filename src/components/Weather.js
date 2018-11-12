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

  render() {
    const { cityName, isButtonClicked } = this.state;
    return (
      <div>
        <Navigation />
        <Search
          className="App-input"
          placeholder="Search City"
          enterButton={<Icon type="search" theme="outlined" />}
          size="large"
          onSearch={value => {
            this.setState({
              cityName: value,
              isButtonClicked: true
            });
          }}
          //   prefix={<Icon type="thunderbolt" theme="twoTone" />}
        />
        {isButtonClicked == true ? (
          <WeatherView cityName={cityName} />
        ) : (
          <div />
        )}

        {/* <WeatherView value={val} /> */}
      </div>
    );
  }
}
export default Weather;
