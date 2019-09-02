import React from "react";
import { withRouter, Link } from "react-router-dom";

// Import components
import { Menu } from "../menu";
import { Icon } from "react-icons-kit";
import { iosArrowRight } from "react-icons-kit/ionicons/iosArrowRight";

// Import styles
import "./styles.css";

const Help = props => {
  let { storeName } = props.match.params;

  return (
    <div className="App-container help">
      {/* Seller menu */}
      <Menu />

      {/* Help logo */}
      <img
        className="help__img"
        alt={"Finn logo"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
        }
      />

      {/* Help title */}
      <h1 className="help__title">How can we help?</h1>

      {/* Help body */}
      <div className="help__body">
        {/* Help row item */}
        <Link to={`/${storeName}/help/questions`}>
          <div className="help__row">
            <p className="help__text">Common questions</p>
            <div className="help__icon">
              <Icon
                icon={iosArrowRight}
                size={"100%"}
                style={{ color: "#c2c2c2" }}
              />
            </div>
          </div>
        </Link>

        {/* Help row item */}

        <div className="help__row">
          <p className="help__text">Talk to us</p>
          <div className="help__icon">
            <Icon
              icon={iosArrowRight}
              size={"100%"}
              style={{ color: "#c2c2c2" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Help);
