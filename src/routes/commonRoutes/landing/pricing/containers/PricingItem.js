import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";
import { close } from "react-icons-kit/ionicons/close";

const PricingItem = ({ feature, available }) => (
  <div className="pricing-item">
    {/* Checkmark icon */}
    {available ? (
      <Icon icon={checkmark} size={"100%"} className="pricing-item__icon" />
    ) : (
      <Icon
        icon={close}
        size={"100%"}
        className="pricing-item__icon pricing-item__icon--null"
      />
    )}

    {/* Feature */}
    <p
      className={`is-marginless is-size-6-mobile is-size-5-desktop ${
        available ? "has-text-grey-darker" : "has-text-grey-lighter"
      } `}
    >
      {feature}
    </p>
  </div>
);

export default PricingItem;
