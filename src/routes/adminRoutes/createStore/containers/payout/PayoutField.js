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

const PayoutField = ({ isValid, history }) => (
  <>
    <div className="create-store-field">
      {/* Phone number input field */}
      <h5 className="create-store-field-label title is-size-7 is-marginless">
        M-PESA ENABLED PHONE NUMBER
      </h5>
      <Field
        name="payoutNumber"
        validate={validatePhoneNumber}
        component={PhoneNumberInput}
      />
    </div>

    {/* Phone number footer */}
    <CreateStoreFooter
      isDisabled={!isValid}
      type={"button"}
      onClick={() => history.push("/create-store/store-location")}
    />
  </>
);

export default withRouter(PayoutField);
