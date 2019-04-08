import React, { Component } from "react";
import { Field } from "formik";

// Import Components
import CurrencyInput from "../input/CurrencyInput";
import GenericInput from "../input/GenericInput";

// Import Styles
import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";

class DetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: false
    };
  }

  componentDidMount() {
    let { values } = this.props;
    let { storeName } = this.props.match.params;

    console.log(values);

    // If image value does not exist, redirect to upload image page
    if (values.file === "") {
      this.props.history.push(`/${storeName}/add-product/image`);
    }
  }

  render() {
    let { values } = this.props;

    return (
      <div>
        <div className="App-container">
          {/* Page header */}
          <div className="header">
            <h1 className="header__title">What are you selling?</h1>
          </div>

          {/* Form field */}
          <div>
            {/*  */}
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

            {/*  */}
            <Field
              name="title"
              render={({ field, form }) => (
                <GenericInput {...field} {...form} />
              )}
            />

            {/*  */}
            <Field
              name="price"
              render={({ field, form }) => (
                <CurrencyInput {...field} {...form} />
              )}
            />
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
