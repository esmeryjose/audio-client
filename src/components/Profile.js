import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class Profile extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.router.history.push("/");
    }
  }

  render() {
    const { profile_img_url, spotify_url, display_name } = this.props.data;
    return (
      <div className="margin-down">
        <Image
          src={profile_img_url}
          href={spotify_url}
          size="medium"
          circular
        />
        <h1>{display_name}</h1>
      </div>
    );
  }
}

export default Profile;
