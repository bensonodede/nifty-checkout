import React, { Component } from "react";
import ColorThief from "colorthief";
import { Helmet } from "react-helmet";

// Import components
import { ScrollToTop } from "../../utils";

// Import styles
import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);

    // Store image color reference
    this.storeImgRef = React.createRef();

    this.state = {
      imgColor: [255, 255, 255]
    };
  }

  render() {
    // Get component state
    const { imgColor } = this.state;
    const [r, g, b] = imgColor;
    const rgbToHex = (r, g, b) =>
      "#" +
      [r, g, b]
        .map(x => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

    let hex = rgbToHex(r, g, b);
    console.log(hex);

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Abc business</title>
          <meta name="theme-color" content={`${hex}`} />
        </Helmet>
        {/* Scroll to top of the page */}
        <ScrollToTop />
        <div
          className="home__header"
          style={{
            backgroundImage: `linear-gradient(180deg, rgb(${r}, ${g}, ${b}), rgb(255, 255,255) 50%)`
          }}
        >
          <div className="App-container home">
            {/* Profile header */}

            {/* Profile Image */}
            {/*! Maintain the ORDER of the props ! */}
            <img
              crossOrigin={"anonymous"}
              ref={this.storeImgRef}
              src={"https://source.unsplash.com/random"}
              alt={"company logo"}
              className={"home__img"}
              onLoad={() => {
                const colorThief = new ColorThief();
                const img = this.storeImgRef.current;
                console.log("Image loaded");
                console.log(img);
                console.log(colorThief.getColor(img, 1, 25));
                this.setState({ imgColor: colorThief.getColor(img, 25) });
              }}
            />

            {/* Profile the title */}
            <h1 className="home__title">Abc business</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
