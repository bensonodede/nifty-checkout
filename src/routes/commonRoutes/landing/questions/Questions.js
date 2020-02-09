import React from "react";
import { Link } from "react-router-dom";

// Import components

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
          <div className="divider" />
          <h1 className="title is-size-4-mobile has-text-centered">
            Common questions
          </h1>
        </div>

        {/* Questions image */}
        <div className="column is-10-mobile is-6-tablet is-4-desktop">
          <img
            alt={"Finn questions"}
            src={
              "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625895/web_assets/pablo-animal-care.png"
            }
          />
        </div>
        {/* End Pricing image */}
      </div>
      {/********** End Questions header **********/}

      {/********** Questions list **********/}
      <div className="columns is-mobile is-centered">
        <div className="column is-10-mobile is-10-tablet is-11-desktop">
          {data.map(item => (
            <Link
              key={item.id}
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
          ))}
        </div>
      </div>
      {/********** End Questions list **********/}
    </div>
  </section>
);

export default Questions;
