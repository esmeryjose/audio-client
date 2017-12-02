import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Input, Menu, Header } from "semantic-ui-react";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: this.activeItem(),
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  activeItem() {
    let splitLocation = window.location.href.split("/");
    if (splitLocation[splitLocation.length - 1] === "new") {
      return "Add Picture";
    } else {
      return "home";
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleChange(e, history) {
    const input = e.target.value;

    if (!this.state.input) {
      history.push("/pictures/");
    }

    this.setState(
      {
        input
      },
      () => {
        this.props.updateSearch(input);
      }
    );
  }

  render() {
    const { activeItem } = this.state;
    this.activeItem();
    return (
      <div>
        <Menu>
          <Menu.Item
            className=""
            name="home"
            as={Link}
            to="/pictures"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <SearchBar
            input={this.state.input}
            handleChange={this.handleChange}
          />
        </Menu>
      </div>
    );
  }
}

const TheHeader = () => (
  <Header className="noMargin" as="h3" textAlign="center" block>
    Audio
  </Header>
);

const SearchBar = withRouter(({ history, input, handleChange }) => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Input
        icon="search"
        value={input}
        placeholder="Search..."
        onChange={event => handleChange(event, history)}
      />
    </Menu.Item>
  </Menu.Menu>
));

export { TheHeader, NavBar };
