import React, { Component } from "react";
import PropTypes from "prop-types";

// Import styles
import "./styles.css";

class ImgLoader extends Component {
  // Declare default props
  static defaultProps = {
    src: "https://source.unsplash.com/random"
  };

  constructor(props) {
    super(props);

    this.state = {
      placeholderLoaded: null,
      placeholder: "",
      loaded: null,
      image: ""
    };
  }

  componentDidMount() {
    // Destructure props
    let { src } = this.props;

    // Get position of 'upload/' in link
    let position = src.indexOf("upload/") + 7;

    // Insert transformations and optimizations for placeholder
    let placeholder = [
      src.slice(0, position),
      "q_1,f_auto/",
      src.slice(position)
    ].join("");

    // Insert image transformations and optimizations
    let image = [src.slice(0, position), "q_auto/", src.slice(position)].join(
      ""
    );

    // Set placeholder and image to state
    this.setState({ placeholder, image });
  }

  render() {
    let { placeholderLoaded, placeholder, loaded, image } = this.state;
    let { onLoad, className } = this.props;

    return (
      <div className="img__container">
        {loaded ? null : (
          <img
            onLoad={() => {
              this.setState({ placeholderLoaded: true });
            }}
            alt={placeholder}
            src={placeholder}
            className={`img__placeholder ${className}`}
          />
        )}

        {placeholderLoaded ? (
          <img
            onLoad={() => {
              // Set image loaded state
              this.setState({ loaded: true }, () => {
                if (onLoad) {
                  onLoad();
                }
              });
            }}
            alt={image}
            src={image}
            className={loaded ? `img__loaded ${className}` : "img__loading"}
          />
        ) : null}
      </div>
    );
  }
}

ImgLoader.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  onLoad: PropTypes.func
};

export default ImgLoader;
