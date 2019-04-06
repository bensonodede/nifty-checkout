import React, { Component } from "react";

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
  render() {
    console.log(this.props);

    let { isValid, errors, values, setFieldValue, resetForm } = this.props;

    return (
      <div>
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
                isValid ? "footer__btn" : "footer__btn footer__btn--disabled"
              }
              disabled={!isValid}
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageForm;
