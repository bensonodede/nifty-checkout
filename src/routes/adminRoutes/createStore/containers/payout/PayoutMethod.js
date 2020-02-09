import React from "react";
import { Field } from "formik";

// Import components
import { SelectInput } from "components/input";
import { validateName } from "components/validation";

// Select input options
const options = [
  { value: "phoneNumber", label: "M-pesa enabled phone number" },
  { value: "tillNumber", label: "Till number" }
];

const PayoutMethodInput = ({ field, form }) => (
  <SelectInput
    options={options}
    defaultValue={{
      value: "phoneNumber",
      label: "M-pesa enabled phone number"
    }}
    onSelectChange={() => {
      form.setFieldValue("payoutNumber", "", false);
      form.setFieldTouched("payoutNumber", false, false);
    }}
    isSearchable={false}
    {...field}
    {...form}
  />
);

const PayoutMethod = () => (
  <div className="create-store-field">
    <h5 className="create-store-field-label title is-size-7 is-marginless">
      PAYOUT METHOD
    </h5>

    {/* Till number input field */}
    <Field
      name="payoutMethod"
      validate={validateName}
      component={PayoutMethodInput}
    />
  </div>
);

export default PayoutMethod;
