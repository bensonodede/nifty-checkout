import React from "react";
import { Field } from "formik";

// Import components
import { LabelInput } from "components/input";
import { validatePhoneNumber } from "components/validation";
import { PhoneNumberMask } from "components/inputMask";
import PayoutFormFooter from "./PayoutFormFooter";

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

const PayoutFormFields = ({ dirty, isValid, mutationLoading }) => (
  <>
    <div className="create-store-field">
      <h5 className="create-store-field-label title is-size-7 is-marginless">
        M-PESA ENABLED PHONE NUMBER
      </h5>

      {/* Phone number input field */}
      <Field
        name="payoutNumber"
        validate={validatePhoneNumber}
        component={PhoneNumberInput}
      />
    </div>

    {/* Form footer */}
    <PayoutFormFooter
      isDisabled={!(dirty && isValid)}
      isLoading={mutationLoading}
    />
  </>
);

export default PayoutFormFields;
