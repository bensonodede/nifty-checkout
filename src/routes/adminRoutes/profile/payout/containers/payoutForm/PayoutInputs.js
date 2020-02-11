import React from "react";

// Import components
import { SelectInput, LabelInput, GenericMaskedInput } from "components/input";
import { PhoneNumberMask, TillNumberMask } from "components/inputMask";

// Select input options
const options = [
  { value: "phoneNumber", label: "M-pesa enabled phone number" },
  { value: "tillNumber", label: "Till number" }
];

// Payout method input component
const PayoutMethodInput = ({ field, form }) => (
  <SelectInput
    options={options}
    // Find value that matches option, filter array and return first index object
    defaultValue={options.filter(option => option.value === field.value)[0]}
    // Set payoutNumber value as empty
    onSelectChange={() => form.setFieldValue("payoutNumber", "", true)}
    isSearchable={false}
    {...field}
    {...form}
  />
);

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

export { PayoutMethodInput, PhoneNumberInput, TillNumberInput };
