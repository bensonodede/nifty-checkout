import React from "react";
import { Field } from "formik";

// Import components
import {
  PayoutMethodInput,
  PhoneNumberInput,
  TillNumberInput
} from "./PayoutInputs";
import {
  validateName,
  validatePhoneNumber,
  validateTillNumber
} from "components/validation";
import PayoutFormFooter from "./PayoutFormFooter";

const PayoutFormFields = ({
  values: { payoutMethod },
  dirty,
  isValid,
  mutationLoading
}) => (
  <>
    <div className="create-store-field">
      <h5 className="create-store-field-label title is-size-7 is-marginless">
        PAYOUT METHOD
      </h5>

      {/* Payout method input field */}
      <Field
        name="payoutMethod"
        validate={validateName}
        component={PayoutMethodInput}
      />
    </div>

    {payoutMethod === "phoneNumber" ? (
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
    ) : (
      <div className="create-store-field">
        <h5 className="create-store-field-label title is-size-7 is-marginless">
          M-PESA TILL NUMBER
        </h5>

        {/* Phone number input field */}
        <Field
          name="payoutNumber"
          validate={validateTillNumber}
          component={TillNumberInput}
        />
      </div>
    )}

    {/* Form footer */}
    <PayoutFormFooter
      isDisabled={!(dirty && isValid)}
      isLoading={mutationLoading}
    />
  </>
);

export default PayoutFormFields;
