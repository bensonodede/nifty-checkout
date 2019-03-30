import React, { Component } from "react";
import Dropzone from "react-dropzone";

import "../../styles/index.css";

class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
      images: []
    };
  }

  render() {
    return (
      <div className="App-container">
        <div className="header">
          <h1 className="header__title">Upload photo</h1>
        </div>
      </div>
    );
  }
}

export default AddImage;
