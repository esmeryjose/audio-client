import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { TheHeader, NavBar } from "./Nav";
import { Button } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <TheHeader />
        <NavBar updateSearch={this.updateSearch} />
      </div>
    );
  }
}

export default App;
