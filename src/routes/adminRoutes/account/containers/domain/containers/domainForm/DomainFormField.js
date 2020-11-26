import React from "react";
import { Field } from "formik";

// Import components
import { GenericInput } from "components/input";
import { validateName } from "components/validation";

// Domain input component
const DomainInput = ({ field, form }) => (
  <GenericInput {...field} {...form} placeholder={"myshop.com"} />
);

// Domain field component
const DomainFormField = () => (
  <div className="create-store-field">
    {/* Field label */}
    <h5 className="create-store-field-label title is-size-7">YOUR DOMAIN</h5>

    {/* Domain input field */}
    <Field name="domainName" validate={validateName} component={DomainInput} />
  </div>
);

export default DomainFormField;
