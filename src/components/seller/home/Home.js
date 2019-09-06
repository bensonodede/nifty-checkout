import React, { Component } from "react";
import ColorThief from "colorthief";
import { Helmet } from "react-helmet";
import Masonry from "react-masonry-css";

// Import components
import { ScrollToTop } from "../../utils";

// Import styles
import "./styles.css";

// Import json mock data
const Items = require("./home.json");

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

    // Convert rgb to hex
    const rgbToHex = (r, g, b) =>
      "#" +
      [r, g, b]
        .map(x => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

    let hex = rgbToHex(r, g, b);

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
          <div className="home">
            <div className="home__img-container">
              {/* Store image */}
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
                  this.setState({ imgColor: colorThief.getColor(img, 25) });
                }}
              />
            </div>

            {/* Store title */}
            {/* <h1 className="home__title">Abc business</h1> */}

            {/* Store grid */}
            <Masonry
              breakpointCols={2}
              className="home__masonry-grid"
              columnClassName="home__masonry-grid_column"
            >
              {/* Store grid item */}
              {Items.map(item => (
                <div key={item.key} className="home__grid-item">
                  <img
                    src={item.imgUrl}
                    alt={"company logo"}
                    className={"home__grid-img"}
                  />
                  {/* <p className={"home__item-name"}>{item.name}</p>
                  <p className={"home__item-price"}>{item.price}</p> */}
                </div>
              ))}
              {/*  */}
            </Masonry>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
