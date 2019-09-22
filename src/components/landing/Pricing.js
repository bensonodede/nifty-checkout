import React from "react";
import Icon from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

// Import pricing data
const data = require("./pricing.json");

const Pricing = () => (
  <div className="pricing">
    <div className="divider" />
    <h1 className="pricing__title">Pricing</h1>

    {/* Pricing image */}
    <div className="pricing__img-container">
      <img
        className="pricing__img"
        alt={"finn pricing"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625900/web_assets/pablo-coming-soon.png"
        }
      />
    </div>

    {/* Pricing table */}
    <div className="pricing__table">
      <div className="pricing__header">
        <h1 className="pricing__sub-text">For every transaction</h1>
        <h1 className="pricing__sub-title">
          2.5% + 5 <span className="pricing__currency">KES</span>
        </h1>
      </div>

      {/* Map pricing benefits */}
      {data.map(item => (
        <div key={item.id} className="pricing__row">
          {/* pricing icon */}
          <div className="pricing__icon-container">
            <div className="pricing__icon">
              <Icon icon={checkmark} size={"100%"} />
            </div>
          </div>

          {/* pricing text */}
          <h3 className="pricing__text">{item.feature}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;
