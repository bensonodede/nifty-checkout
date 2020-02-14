import React from "react";

// Import components
import Card from "components/card";
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { ic_account_circle } from "react-icons-kit/md/ic_account_circle";

const OrderContact = ({ phoneNumber, phoneNumberMask }) => (
  <div className="column is-10-mobile is-10-tablet is-4-desktop">
    <Card>
      <div className="order-contact">
        {/* Order contact header */}
        <h1 className="title is-size-4">Contact</h1>

        {/* Order contact icon and phoneNum */}
        <div className="order-product__section">
          <div className="order-contact__info">
            {/* Order contact icon */}
            <div className="order-contact__icon">
              <Icon icon={ic_account_circle} size={"100%"} />
            </div>

            {/* Order contact phone number */}
            <div>
              <h5 className="is-size-6 is-marginless">{phoneNumberMask}</h5>
            </div>
          </div>
        </div>

        {/* Initiate phone call */}
        <div className="order-contact__section">
          <Button onClick={() => window.open(`tel:+${phoneNumber}`)} isOutline>
            Get in touch
          </Button>
        </div>
      </div>
    </Card>
  </div>
);

export default OrderContact;
