import React, { Component } from "react";
import { Field } from "formik";
import { Helmet } from "react-helmet";

// Import Components
import { ImageInput } from "components/input";

// Import styles
import "./styles.scss";

// Import functions
import { validateImage } from "components/validation";

// Upload image component
const ImageForm = ({ match, isValid }) => {
  // Get store name
  let { storeName } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet>
        <title>Add a photo - {storeName}</title>
      </Helmet>

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
            <div className="image-form__footer">
              <div className="column is-10-mobile is-10-tablet has-text-right">
                <button
                  disabled={!isValid}
                  className={`${
                    isValid ? `` : `disabled`
                  } button has-background-grey-darker has-text-white`}
                >
                  <span>Next</span>
                </button>
              </div>
            </div>
            {/* End Page footer */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageForm;
