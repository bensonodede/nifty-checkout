import React from "react";
import { Field } from "formik";
import { withRouter } from "react-router-dom";

// Import components
import CreateStoreFooter from "../CreateStoreFooter";
import { LabelInput } from "components/input";
import { PhoneNumberMask } from "components/inputMask";
import { validatePhoneNumber } from "components/validation";

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

const PhoneNumberField = ({ history, isValid }) => (
  <>
    <div className="create-store-field">
      {/* Phone number input field */}
      <h5 className="create-store-field-label title is-size-7">PHONE NUMBER</h5>
      <Field
        name="phoneNumber"
        validate={validatePhoneNumber}
        component={PhoneNumberInput}
      />
    </div>

    {/* Phone number footer */}
    <CreateStoreFooter
      isDisabled={!isValid}
      type={"button"}
      onClick={() => history.push("/create-store/payout")}
    />
  </>
);

export default withRouter(PhoneNumberField);
