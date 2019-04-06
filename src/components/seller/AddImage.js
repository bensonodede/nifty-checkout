import React, { Component } from "react";

import { Redirect, withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Import Components
import Thumb from "../seller/Thumb.js";

// Import icons
import { Icon } from "react-icons-kit";
import { iosCloudUploadOutline } from "react-icons-kit/ionicons/iosCloudUploadOutline";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";

// TODO: Prevent multiple submissions

// Define accepted image formats
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

// Validate image format
const AddImageSchema = Yup.object().shape({
  file: Yup.mixed()
    .required("Please upload a photo of the item.")
    .test(
      "fileFormat",
      "Oops! That's not an image.",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
});

// Upload image component
class AddImage extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      values: null,
      submitted: false
    };
  }


  componentWillUnmount(){

  }
  //
  handleSubmit = values => {
    this.props.history.push("/");
  };


  render() {
    let { storeName } = this.props.match.params;

    // if (this.state.values) {
    //   console.log(this.state.values);

    //   // return <Redirect push to={`/${storeName}/add-product`} />;
    // }
    return (
      <div>
        <Formik
          initialValues={{ file: "" }}
          validationSchema={AddImageSchema}
          validateOnChange={true}
          validateOnBlur={false}
          onSubmit={(values, actions, isValid) => {
            actions.setSubmitting(false);
            console.log(values);
            console.log(actions);
            const { history } = this.props;
            history.push("/");
          }}
        >
          {({ isValid, errors, values, setFieldValue, resetForm }) => (
            <Form>
              {/* Page body */}
              <div className="App-container">
                {/* Page header */}
                <div className="header">
                  <h1 className="header__title">Add a photo</h1>
                </div>

                {/* Form field */}
                {!isValid ? (
                  <div className="product-form">
                    {/* Image upload label */}
                    <p className="product-form__label">
                      First, show us what it looks like.
                    </p>

                    {/* Image upload button */}
                    <div className="product-form__image-placeholder">
                      <div className="product-form__placeholder-background">
                        <label
                          className="product-form__image-label"
                          htmlFor="file"
                        >
                          <Icon
                            icon={iosCloudUploadOutline}
                            size={23}
                            style={{ color: "#ffffff" }}
                          />
                          <p className="product-form__label-text">
                            Upload photo
                          </p>
                        </label>
                      </div>
                    </div>

                    {/* File input */}
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/jpg, image/jpeg, image/png"
                      className="product-form__image-input"
                      onChange={event => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                    />
                  </div>
                ) : (
                  /* Remove uploaded image button */
                  <div
                    className="product-form__image-delete"
                    onClick={() => {
                      resetForm({ file: "" });
                    }}
                  >
                    <Icon
                      icon={iosTrashOutline}
                      size={25}
                      style={{ color: "#fc5e5e" }}
                    />

                    <p className="product-form__image-delete-text">Remove</p>
                  </div>
                )}

                {/* Thumbnail component */}
                <Thumb className="product-form__thumbnail" file={values.file} />

                {/* Image upload errors */}
                <p className="product-form__error-message ">{errors.file}</p>
              </div>

              {/* Page footer */}
              <div className="footer">
                <div className="footer__body">
                  <button
                    className={
                      isValid
                        ? "footer__btn"
                        : "footer__btn footer__btn--disabled"
                    }
                    disabled={!isValid}
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withRouter(AddImage);
