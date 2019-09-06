import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Masonry from "react-masonry-css";

// Import components
import { ScrollToTop } from "../../utils";

// Import styles
import "./styles.css";

// Import json mock data
const Items = require("./home.json");

class Home extends Component {
  render() {
    // Get state params
    const { storeName } = this.props.match.params;

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Abc business</title>
        </Helmet>

        {/* Scroll to top of the page */}
        <ScrollToTop />

        <div className="home">
          {/* Store title */}
          <div className="home__title-container">
            <h1 className="home__title">
              <span className="home__title--very-light">Hey you,</span>
              <br />
              <span className="home__title--light">welcome to</span>
              <br />
              {storeName}.{" "}
              <span role="img" aria-label="hand" className="home__emoji">
                🤗
              </span>
            </h1>
          </div>
          {/* End store title */}

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
          </Masonry>
          {/* End store grid */}
        </div>
      </div>
    );
  }
}

export default Home;
