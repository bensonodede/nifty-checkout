import React, { Component } from "react";
import ExifOrientationImg from "react-exif-orientation-img";
import $ from "jquery";
import Chocolat from "chocolat";

// Import styles
import "../../../styles/index.css";
import "./styles.css";
import "../../../styles/chocolat.css";

$.fn.Chocolat = Chocolat;

// Thumbnail component
class Thumb extends Component {
  constructor(props) {
    super(props);

    // Define thumb component refs
    this.thumb = React.createRef();
  }

  // Initialize Chocolat after FIRST upload
  componentDidUpdate() {
    const thumb = this.thumb.current;

    $(thumb).Chocolat();
  }

  // Initialize Chocolat for persistent data and subsequent uploads
  componentDidMount() {
    const thumb = this.thumb.current;

    $(thumb).Chocolat();
  }

  render() {
    const { file } = this.props;

    console.log(file);
    // If no file has been uploaded, don't show thumbnail
    if (!file) {
      return null;
    }

    // If image file exists, return image
    return (
      <div ref={this.thumb}>
        <ExifOrientationImg
          src={file}
          alt={file}
          className="product-form__thumbnail"
        />
      </div>
    );
  }
}

export default Thumb;
