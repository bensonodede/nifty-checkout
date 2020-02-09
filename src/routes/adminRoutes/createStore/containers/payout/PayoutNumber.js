import React from "react";
import { Field } from "formik";

// Import components
import { LabelInput, GenericMaskedInput } from "components/input";
import { PhoneNumberMask, TillNumberMask } from "components/inputMask";
import { validatePhoneNumber, validateTillNumber } from "components/validation";

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

// Till number input component
const TillNumberInput = ({ field, form }) => (
  <GenericMaskedInput
    {...field}
    {...form}
    mask={TillNumberMask}
    placeholder={"123 456"}
  />
);

const PayoutNumber = ({ payoutMethod }) => (
  <div className="create-store-field">
    {payoutMethod === "phoneNumber" ? (
      <>
        <h5 className="create-store-field-label title is-size-7 is-marginless">
          M-PESA ENABLED PHONE NUMBER
        </h5>

        {/* Phone number input field */}
        <Field
          name="payoutNumber"
          validate={validatePhoneNumber}
          component={PhoneNumberInput}
        />
      </>
    ) : (
      <>
        <h5 className="create-store-field-label title is-size-7 is-marginless">
          M-PESA TILL NUMBER
        </h5>

        {/* Till number input field */}
        <Field
          name="payoutNumber"
          validate={validateTillNumber}
          component={TillNumberInput}
        />
      </>
    )}
  </div>
);

export default PayoutNumber;
