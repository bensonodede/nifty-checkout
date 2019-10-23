import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Import styles
import "./styles.scss";

// Import json files
const data = require("./features.json");

const Features = () => (
  <section className="features">
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {/* Map each feature item */}
        {data.map(item => (
          <ScrollAnimation
            key={item.id}
            animateIn={"fadeInUp"}
            duration={1}
            delay={100}
          >
            <div className="column is-full features__item">
              <div className="columns is-centered is-mobile is-multiline is-variable is-7-tablet">
                {/* Feature image */}
                <div className="column is-3-tablet is-9-mobile ">
                  <img
                    className="features__img"
                    alt={`feature-${item.id}`}
                    src={item.imgUrl}
                  />
                </div>

                {/* Feature header and description */}
                <div className="column content features__content is-4-tablet is-9-mobile">
                  <h1 className="title is-size-5 is-marginless">
                    {item.header}
                  </h1>
                  <p>{item.description}</p>
                </div>
                {/* End feature description */}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
