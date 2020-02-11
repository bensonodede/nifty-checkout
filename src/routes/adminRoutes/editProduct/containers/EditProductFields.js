import React from "react";
import { Field } from "formik";

// Import components
import { EditImageInput } from "./EditProductInputs";
import { validateImage } from "components/validation";
import EditProductData from "./EditProductData";
import EditProductFooter from "./EditProductFooter";

const EditProductFields = ({ dirty, isValid, loading }) => (
  <>
    {/* Image field */}
    <Field name={"file"} validate={validateImage} component={EditImageInput} />

    {/* Text fields */}
    {EditProductData.map(({ id, label, name, validate, input }) => (
      <div key={id} className="edit-product-field">
        <h5 className="edit-product-field__label title is-size-7 is-marginless">
          {label}
        </h5>
        <Field name={name} validate={validate} component={input} />
      </div>
    ))}

    {/* Edit footer */}
    <EditProductFooter isDisabled={!(dirty && isValid)} isLoading={loading} />
  </>
);

export default EditProductFields;
