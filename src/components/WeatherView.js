import React, { Component } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import { Input, Icon, Button } from "antd";

import "../App.css";

class WeatherView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverResponse: "",
      city: "",
      country: "",
      wind: "",
      temp: "",
      visibility: ""
    };
    console.log("propsConstructor", this.props);
    this.getWeather = this.getWeather.bind(this);
  }
  handleChange = e => {
    this.setState({
      city: e.target.value
    });
  };
  async getWeather(props) {
    const city = this.props.cityName;
    const country = "Pakistan";
    const API_KEY = "295040af23ce56128aad36f36ec8d2b3";

    const api_call = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    console.log("api_data", api_call.data);
    this.setState({
      wind: api_call.data.wind.speed,
      temp: api_call.data.main.temp,
      visibility: api_call.data.visibility
    });
  }
  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { cityName } = this.props;
    return (
      <div>
        <Input
          placeholder="City"
          className="App-input"
          onChange={this.handleChange}
        />
        <br />

        <div className="">
          City: {cityName}
          Current Temperature: {this.state.temp}
          Wind: {this.state.wind}
          Visibility: {this.state.visibility / 1000}km
        </div>
        <Navigation />
      </div>
    );
  }
}
export default WeatherView;
