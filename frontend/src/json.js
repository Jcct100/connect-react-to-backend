import React, { Component } from "react";
import axios from "axios";

export default class json extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  componentDidMount = () => {
    axios.get("/getWeatherToronto").then(response => {
      var title = response.data;
      this.setState({ title });
    });
  };

  render() {
    return (
      <div>
        <h1>JSON: {this.state.title}</h1>
      </div>
    );
  }
}
