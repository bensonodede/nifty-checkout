import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "formik";
import { Helmet } from "react-helmet";
import v8n from "v8n";

// Import Components
import Thumb from "./Thumb";

// Import icons
import { Icon } from "react-icons-kit";
import { iosCloudUploadOutline } from "react-icons-kit/ionicons/iosCloudUploadOutline";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";

import { SignOut } from "../../auth";

// Import styles
import "../../../styles/index.css";
import "./styles.css";

// Upload image component
class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false
    };
  }

  /********** IsValid function **********/

  _isValid = param => {
    // Declare global error variable
    let error;

    // Check for a string that contains a base64 image
    const validation = v8n().object();

    // If value does not pass regex test
    if (!validation.test(param)) {
      this.setState({ valid: false });

      // Set error message
      error = "Oops, that's not an image.";
    }

    // If input value passaes validation, set valid state
    else {
      this.setState({ valid: true });
    }

    return error;
  };

  /********** Image validation **********/

  validateImage = value => {
    // Check if value if valid
    return this._isValid(value);
  };

  componentDidMount() {
    // Get initial value on mount
    let { file } = this.props.values;

    // Check if input is valid
    this._isValid(file);
  }

  componentWillReceiveProps(nextProps) {
    // Declare props variables
    let nextVal = nextProps.values.file;
    let val = this.props.values.file;

    //If new prop is received...
    if (nextVal !== val) {
      // Check if new value is valid
      this._isValid(nextVal);
    }
  }

  render() {
    let { valid } = this.state;
    let { storeName } = this.props.match.params;
    let { values, setFieldValue, resetForm } = this.props;

    // Declare global image preview
    let PREVIEW_URL = "";

    //
    if (values.file) {
      PREVIEW_URL = URL.createObjectURL(values.file);
    }

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Add a photo - {storeName}</title>
        </Helmet>

        {/* Page body */}
        <div className="App-container">
          {/* Page header */}
          <div className="header">
            <h1 className="header__title">Add a photo</h1>
          </div>

          {/* Form field */}
          {!values.file ? (
            <div>
              {/*  */}
              <p className="header__text">
                Photos help your customers imagine what it's like to use your
                product.{" "}
                <span role="img" aria-label="100">
                  🙈
                </span>
              </p>
              <div className="product-form">
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
                  onChange={async event => {
                    let [file] = await event.currentTarget.files;

                    // Validate image file
                    await this.validateImage(file);

                    // Set image file to field
                    setFieldValue("file", file);
                  }}
                />
              </div>
            </div>
          ) : (
            /* Remove uploaded image button */
            <div>
              <div
                className="product-form__image-delete"
                onClick={async () => {
                  await URL.revokeObjectURL(values.file);
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
            </div>
          )}

          {/* Thumbnail component */}
          <Thumb className="product-form__thumbnail" file={PREVIEW_URL} />

          {/* Image upload errors */}
          <ErrorMessage name="file" className="product-form__error-message" />
        </div>

        {/* Page footer */}
        <div className="footer">
          <SignOut />
          <div className="footer__body">
            <Link to={`/${storeName}/add-product/details`}>
              <button
                className={
                  valid ? "footer__btn" : "footer__btn footer__btn--disabled"
                }
                disabled={!valid}
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
