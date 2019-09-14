import React from "react";
import { Link } from "react-router-dom";

// Import components
import { Menu } from "../menu";

// Import styles
import "./styles.css";

// Import questions
const sellerFaq = require("./SellerFaq.json");

const Questions = props => {
  let { storeName } = props.match.params;

  return (
    <div className="App-container questions">
      <Menu />
      {/* Questions logo */}
      <div className="help__img-container">
        <img
          className="help__img"
          alt={"Finn logo"}
          src={
            "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
          }
        />
      </div>

      {/* Questions header */}
      <h1 className="help__title">Common questions</h1>

      {/* Questions body */}
      <div className="questions__body">
        {/********** questions row *********/}
        {sellerFaq.map(item => (
          <Link
            key={item.id}
            to={{
              pathname: `/${storeName}/help/faq`,
              state: {
                item
              }
            }}
          >
            <div className="questions__row">
              <p className="questions__text">{item.question}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* End Questions body */}
    </div>
  );
};
export default Questions;
