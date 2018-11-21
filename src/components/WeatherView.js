import React, { Component } from "react";
import axios from "axios";
import { Input } from "antd";

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
      city: api_call.data.name,
      wind: api_call.data.wind.speed,
      temp: api_call.data.main.temp,
      visibility: api_call.data.visibility
    });
  }
  componentDidMount() {
    this.getWeather();
  }
  componentDidUpdate(prevProps) {
    if (this.props.cityName !== prevProps.cityName) {
      this.getWeather();
    }
  }
  render() {
    const { city, temp, wind, visibility } = this.state;
    return (
      <div className="temp-disp">
        <p>City: {city}</p>
        <p>Current Temperature: {temp}</p>
        <p>Wind: {wind}</p>
        <p>Visibility: {visibility / 1000}km</p>
      </div>
    );
  }
}
export default WeatherView;
