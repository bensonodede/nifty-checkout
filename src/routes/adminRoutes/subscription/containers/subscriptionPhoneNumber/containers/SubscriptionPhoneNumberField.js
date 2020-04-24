import React from "react";
import { Field } from "formik";

// Import components
import { LabelInput } from "components/input";
import { PhoneNumberMask } from "components/inputMask";
import { validatePhoneNumber } from "components/validation";
import Button from "components/button";

// Phone number input component
const PhoneNumberInput = ({ field, form }) => (
  <LabelInput
    {...field}
    {...form}
    label={"+254"}
    mask={PhoneNumberMask}
    placeholder={"712 345 678"}
  />
);

const SubscriptionPhoneNumberField = ({ isValid }) => (
  <>
    <div className="create-store-field">
      {/* Phone number input field */}
      <h1 className="create-store-field-label title is-size-7 is-marginless">
        PHONE NUMBER
      </h1>
      <Field
        name="phoneNumber"
        validate={validatePhoneNumber}
        component={PhoneNumberInput}
      />
    </div>

    {/* Phone number footer */}
    <Button type={"submit"} isDisabled={!isValid}>
      Next
    </Button>
  </>
);

export default SubscriptionPhoneNumberField;
