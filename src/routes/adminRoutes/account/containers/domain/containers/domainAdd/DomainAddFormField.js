import React from "react";
import { Field } from "formik";

// Import components
import { GenericMaskedInput } from "components/input";
import { validateName } from "components/validation";

// Domain input component
const DomainInput = ({ field, form }) => (
  <GenericMaskedInput
    {...field}
    {...form}
    placeholder={"myshop.com"}
    // Only allow lowercase letters, numbers and symbols
    mask={(s) => Array.from(s).map(() => /[a-z-0-9_@./#&+-]+/)}
  />
);

// Domain field component
const DomainAddFormField = () => (
  <div className="create-store-field">
    {/* Field label */}
    <h5 className="create-store-field-label title is-size-7">YOUR DOMAIN</h5>

    {/* Domain input field */}
    <Field name="domainName" validate={validateName} component={DomainInput} />
  </div>
);

export default DomainAddFormField;
