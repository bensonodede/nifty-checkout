import React, { Component } from "react";
import $ from "jquery";
import Chocolat from "chocolat";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";

$.fn.Chocolat = Chocolat;

// Thumbnail component
class Thumb extends Component {
  constructor(props) {
    super(props);

    // Define thumb component state
    this.state = {
      loading: false,
      thumb: undefined
    };

    // Define thumb component refs
    this.thumb = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    // If incoming props are empty, return null
    if (!nextProps.file) {
      return null;
    }

    // Set loading to true while file is being read
    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      //When reading is finished, set URL as thumb state
      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result }, () => {
          //
          // Get thumb ref and initialize Chocolat.js
          const thumb = this.thumb.current;
          $(thumb).Chocolat();
        });
      };

      // Read file as BASE64 encoded URL
      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    // If no file has been uploaded, don't show thumbnail
    if (!file) {
      return null;
    }

    // If file is loading, show loading
    if (loading) {
      return <p>Loading. . .</p>;
    }

    // If image file exists, return image
    return (
      <div onClick={this.lightbox} ref={this.thumb}>
        <a className="chocolat-image" href={thumb}>
          <img
            src={thumb}
            alt={file.name}
            className="product-form__thumbnail"
          />
        </a>
      </div>
    );
  }
}

export default Thumb;
