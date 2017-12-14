import React, { Component } from "react";
import { withRouter, Link, Route } from "react-router-dom";
import { Input, Menu, Header } from "semantic-ui-react";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  loggingOut = () => {
    this.props.handleLogOut(false);
  };

  renderLoggedInBar = () => {
    return (
      <Menu>
        <Menu.Item name={"Log Out"} onClick={this.loggingOut} />
        <SearchBar input={this.state.input} />
      </Menu>
    );
  };

  renderLoggedOutBar = () => {
    return (
      <Menu>
        <a href="http://localhost:3000/api/v1/auth">
          <Menu.Item className="" name={"Log In"} />
        </a>
      </Menu>
    );
  };

  render() {
    return (
      <div>
        {this.props.loggedIn
          ? this.renderLoggedInBar()
          : this.renderLoggedOutBar()}
      </div>
    );
  }
}

const TheHeader = () => (
  <Header className="noMargin" as="h3" textAlign="center" block>
    Audio
  </Header>
);

const SearchBar = () => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Input
        icon="search"
        value={""}
        placeholder="Search..."
        onChange={e => {}}
      />
    </Menu.Item>
  </Menu.Menu>
);

export { TheHeader, NavBar };
