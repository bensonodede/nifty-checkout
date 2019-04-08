import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "formik";

// Import Components
import Thumb from "./Thumb";

// Import icons
import { Icon } from "react-icons-kit";
import { iosCloudUploadOutline } from "react-icons-kit/ionicons/iosCloudUploadOutline";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";

// Upload image component

class ImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      thumb: undefined
    };
  }

  render() {
    let { storeName } = this.props.match.params;
    let { values, setFieldValue, resetForm, validateField } = this.props;

    return (
      <div>
        {/* Page body */}
        <div className="App-container">
          {/* Page header */}
          <div className="header">
            <h1 className="header__title">Add a photo</h1>
          </div>

          {/* Form field */}
          {!values.file ? (
            <div className="product-form">
              {/* Image upload label */}
              <p className="product-form__label">
                First, show us what it looks like.
              </p>

              {/* Image upload button */}
              <div className="product-form__image-placeholder">
                <div className="product-form__placeholder-background">
                  <label className="product-form__image-label" htmlFor="file">
                    <Icon
                      icon={iosCloudUploadOutline}
                      size={23}
                      style={{ color: "#ffffff" }}
                    />
                    <p className="product-form__label-text">Upload photo</p>
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
                  let file = event.currentTarget.files[0];
                  let reader = new FileReader();

                  //
                  reader.onloadend = () => {
                    let image = reader.result;
                    setFieldValue("file", image);
                    validateField("file");
                  };

                  // Read file as BASE64 encoded URL
                  reader.readAsDataURL(file);
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
          <ErrorMessage name="file" className="product-form__error-message" />
        </div>

        {/* Page footer */}
        <div className="footer">
          <div className="footer__body">
            <Link to={`/${storeName}/add-product/details`}>
              <button
                className={
                  values.file
                    ? "footer__btn"
                    : "footer__btn footer__btn--disabled"
                }
                disabled={!values.file}
                onClick={() => {}}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageForm;
