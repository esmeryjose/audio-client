import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { TheHeader, NavBar } from "./Nav";
import Profile from "./Profile";
import Auth from "../Adapters/Auth";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      loggedIn: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token") && !this.state.loggedIn) {
      Auth.currentUser().then(currentUser =>
        this.setState({ loggedIn: true, currentUser })
      );
    }
  }

  handleLogOut = loggedIn => {
    localStorage.clear();
    this.setState({ loggedIn }, () => this.props.history.push("/"));
  };

  authAction = router => {
    if (!localStorage.getItem("token")) {
      const code = router.location.search.split("?code=")[1];
      Auth.login(code).then(({ token, currentUser }) => {
        localStorage.setItem("token", token);
        this.setState({ loggedIn: true, currentUser }, () => {
          router.history.push("/profile");
        });
      });
    }
    return null;
  };

  renderProfile = router => {
    return <Profile router={router} data={this.state.currentUser} />;
  };

  render() {
    return (
      <div>
        <TheHeader />
        <NavBar
          loggedIn={this.state.loggedIn}
          handleLogOut={this.handleLogOut}
        />
        <Route exact path="/profile" render={this.renderProfile} />
        <Route exact path="/redirect" component={this.authAction} />
      </div>
    );
  }
}

export default App;
