import React from "react";
import { Field } from "formik";

// Import components
import StoreFormData from "./StoreFormData";
import StoreFormFooter from "./StoreFormFooter";

const StoreFormFields = ({ dirty, isValid }) => (
  <>
    {/* Map all fields */}
    {StoreFormData.map(({ id, label, name, input, validate }) => (
      <div className="edit-store-field" key={id}>
        <h5 className="edit-store-field__label title is-size-7">{label}</h5>
        <Field name={name} component={input} validate={validate} />
      </div>
    ))}

    {/* footer button */}
    <StoreFormFooter isDisabled={!(dirty && isValid)} />
  </>
);

export default StoreFormFields;
