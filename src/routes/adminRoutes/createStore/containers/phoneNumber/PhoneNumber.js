import React from "react";

// Import components
import PhoneNumberHeader from "./PhoneNumberHeader";
import PhoneNumberField from "./PhoneNumberField";
import PhoneNumberDescription from "./phoneNumberDescription";

const PhoneNumber = ({
  isValid,
  touched: { phoneNumber: touchedPhoneNumber },
}) => (
  <div className="route-wrapper-landing">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        <div className="column is-10-mobile is-6-tablet is-4-desktop">
          <PhoneNumberHeader />
          <PhoneNumberDescription />
          <PhoneNumberField isValid={!!(isValid && touchedPhoneNumber)} />
        </div>
      </div>
    </div>
  </div>
);

export default PhoneNumber;
