import React, { Component } from "react";
import { Field } from "formik";

import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";

class DetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: false
    };
  }

  render() {
    let { isValid, errors, values, resetForm, validateField } = this.props;
    // TODO: If photo value is missing, redirect to image page
    // TODO: Custom input components. (Simple and inline label for currency and phone numbers)
    return (
      <div>
        <div className="App-container">
          {/* Page header */}
          <div className="header">
            <h1 className="header__title">What are you selling?</h1>
          </div>

          {/* Form field */}
          <div className="product-form">
            <div>
              <img
                className="product__img"
                src={values.file}
                alt={values.file.name}
              />
            </div>

            <p className="product-form__label">
              First, tell us what it's called.
            </p>

            <Field
              name="title"
              type="text"
              autoComplete="off"
              className={
                "product-form__input-text " +
                (errors.title ? "product-form__input-text--error" : null)
              }
            />
            {<p className="product-form__error-message">{errors.title}</p>}
          </div>
        </div>
        {/* Page footer */}
        <div className="footer">
          <div className="footer__body">
            <button className="footer__btn" type="submit">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailsForm;
