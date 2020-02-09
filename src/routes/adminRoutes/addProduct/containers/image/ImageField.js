import React from "react";
import { withRouter } from "react-router-dom";
import { Field } from "formik";

// Import Components
import { ImageInput } from "components/input";
import { validateImage } from "components/validation";
import AddProductFooter from "../addProductFooter";

// Image input component
const ImgInput = ({ field, form }) => <ImageInput {...field} {...form} />;

const ImageField = ({ history, isValid, match }) => {
  let { storeUsername } = match.params;

  return (
    <>
      {/* Image field */}
      <div className="add-product-field">
        <Field name="file" validate={validateImage} component={ImgInput} />
      </div>

      {/* Image field footer */}
      <AddProductFooter
        isDisabled={!isValid}
        type={"button"}
        onClick={() =>
          history.push(`/${storeUsername}/admin/products/add/details`)
        }
      />
    </>
  );
};

export default withRouter(ImageField);
