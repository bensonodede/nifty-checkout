import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

// Import styles
import "./styles.scss";

// Import faq data
const data = require("./faq.json");

const Questions = () => (
  <section className="questions">
    <div className="container">
      {/********** Questions header **********/}

      <div className="columns is-multiline is-mobile is-centered">
        {/* Questions title */}
        <div className="column is-full">
          <ScrollAnimation
            animateIn={"fadeInUp"}
            duration={1}
            delay={100}
            offset={50}
          >
            <div className="divider" />
            <h1 className="title is-size-4-mobile has-text-centered">
              Common questions
            </h1>
          </ScrollAnimation>
        </div>

        {/* Questions image */}
        <div className="column is-10-mobile is-6-tablet is-4-desktop">
          <ScrollAnimation
            animateIn={"fadeInUp"}
            duration={1}
            delay={100}
            offset={50}
          >
            <img
              alt={"Finn questions"}
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625895/web_assets/pablo-animal-care.png"
              }
            />
          </ScrollAnimation>
        </div>
        {/* End Pricing image */}
      </div>
      {/********** End Questions header **********/}

      {/********** Questions list **********/}
      <div className="columns is-mobile is-centered">
        <div className="column is-10-mobile is-10-tablet is-11-desktop">
          {data.map(item => (
            <ScrollAnimation
              key={item.id}
              animateIn={"fadeInUp"}
              duration={1}
              delay={100}
              offset={50}
            >
              <Link
                to={{
                  pathname: "/faq",
                  state: {
                    item
                  }
                }}
              >
                <div className="content questions__row">
                  <p className="questions__text">{item.question}</p>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      {/********** End Questions list **********/}
    </div>
  </section>
);

export default Questions;
