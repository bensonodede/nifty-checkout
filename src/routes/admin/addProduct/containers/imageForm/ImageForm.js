import React from "react";
import { Field } from "formik";
import { Helmet } from "react-helmet";

// Import Components
import { ImageInput } from "components/input";
import FooterForm from "../footerForm";

// Import styles
import "./styles.scss";

// Import functions
import { validateImage } from "components/validation";

// Upload image component
const ImageForm = ({ match, history, isValid, dirty }) => {
  // Custom validation
  // ? Dirty fix for 'validate on mount'
  const imageValid = !!(isValid && dirty);

  // Get store name
  let { storeName } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet title={`Add a photo - ${storeName}`} />

      {/* Page body */}
      <div className="container">
        <div className="image-form">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Page header */}
            <div className="column is-10">
              <h1 className="title is-size-4 is-marginless">Add a photo</h1>
              <p className="is-size-6">
                Photos help your customers imagine what it's like to use your
                product.{" "}
                <span role="img" aria-label="100">
                  🙈
                </span>
              </p>
            </div>

            {/* Image input field*/}
            <div className="column is-10-mobile is-10-tablet is-10-desktop">
              <Field
                name={"file"}
                component={ImageInput}
                validate={validateImage}
              />
            </div>

            {/* Page footer */}
            <FooterForm
              valid={imageValid}
              loading={null}
              onPress={() =>
                history.push(`/${storeName}/admin/add-product/details`)
              }
              btnText={"Next"}
              btnType={"button"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageForm;
