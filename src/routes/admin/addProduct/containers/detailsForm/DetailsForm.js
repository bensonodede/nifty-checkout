import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Field } from "formik";
import ExifOrientationImg from "react-exif-orientation-img";

// Import Components
import { GenericInput, LabelInput } from "components/input";
import { PriceMask } from "components/inputMask";
import FooterForm from "../footerForm";

// Import Styles
import "./styles.scss";

// Import functions
import { validateName } from "components/validation";

const DetailsForm = ({
  // Get store name
  match: {
    params: { storeName }
  },
  history: { push },
  values: { file },
  loading,
  isValid,
  // Destructure touched props as aliases
  touched: { file: touchedFile, name: touchedName, price: touchedPrice }
}) => {
  // Redirect if image is missing
  useEffect(() => {
    if (!file) {
      push(`/${storeName}/admin/add-product/image`);
    }
  }, []);

  // Custom validation
  const formValid = !!(isValid && touchedFile && touchedName && touchedPrice);

  // Declare gloabl URL for image preview
  let PREVIEW_URL = "";

  // Assign image preview URL if file exists
  if (file) {
    PREVIEW_URL = URL.createObjectURL(file);
  }
  return (
    <>
      {/* Document title */}
      <Helmet title={`Add details - ${storeName}`} />

      {/* Page body */}
      <div className="container">
        <div className="details-form">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Page header */}
            <div className="column is-10">
              <h1 className="title is-size-4 is-marginless">
                What are you selling?
              </h1>
            </div>

            {/* Image preview */}
            <div className="column is-10">
              <ExifOrientationImg
                className="details-form__img"
                src={PREVIEW_URL}
                alt={file.name}
              />
            </div>

            {/* Product name field */}
            <div className="column is-10">
              <div className="columns">
                <div className="column is-6-tablet is-5-desktop">
                  <h1 className="is-size-6">Product name</h1>
                  <Field
                    name="name"
                    validate={validateName}
                    component={GenericInput}
                    placeholder={"awesome sauce"}
                  />
                </div>
              </div>
            </div>

            {/* Product price field */}
            <div className="column is-10">
              <div className="columns">
                <div className="column is-6-tablet is-5-desktop">
                  <h1 className="is-size-6">Price</h1>
                  <Field
                    name="price"
                    validate={validateName}
                    component={LabelInput}
                    placeholder={"1,000"}
                    mask={PriceMask}
                    label={"KSH"}
                  />
                </div>
              </div>
            </div>
            {/* End Product price field */}
          </div>
        </div>
      </div>

      {/* Page footer */}
      <FooterForm
        valid={formValid}
        loading={loading}
        onPress={null}
        btnText={"Done"}
        btnType={"submit"}
      />
    </>
  );
};

export default DetailsForm;
