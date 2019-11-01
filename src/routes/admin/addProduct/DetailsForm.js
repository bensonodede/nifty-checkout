import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Field } from "formik";
import ExifOrientationImg from "react-exif-orientation-img";
import v8n from "v8n";

// Import Components
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { LabelInput, GenericInput } from "components/input";
import { SimpleLoader } from "components/loader";

// Import Styles
import "./styles.scss";

// Number mask input definition
const numberMask = createNumberMask({
  prefix: "",
  suffix: "",
  allowDecimal: true
});

// Check for a string with at least one character
const validation = v8n()
  .string()
  .minLength(1);

class DetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValid: false,
      priceValid: false
    };
  }

  /********** Validate name field **********/
  _isNameValid = param => {
    let error;

    if (!validation.test(param)) {
      this.setState({ nameValid: false });

      // Set error message
      error = " ";
    }

    // If input value passes validation, set valid state
    else {
      this.setState({ nameValid: true });
    }

    return error;
  };

  validateName = value => {
    // Check if value if valid
    return this._isNameValid(value);
  };

  /********** Validate price field **********/
  _isPriceValid = param => {
    let error;

    if (!validation.test(param)) {
      this.setState({ priceValid: false });

      // Set error message
      error = " ";
    }

    // If input value passes validation, set valid state
    else {
      this.setState({ priceValid: true });
    }

    return error;
  };

  validatePrice = value => {
    // Check if value if valid
    return this._isPriceValid(value);
  };

  componentWillMount() {
    let { file } = this.props.values;
    let { storeName } = this.props.match.params;

    // If file value is empty, redirect to upload image page
    if (file === "" || file === undefined) {
      this.props.history.push(`/${storeName}/add-product/image`);
    }
  }

  render() {
    let { values, loading } = this.props;
    let { nameValid, priceValid } = this.state;
    let { storeName } = this.props.match.params;

    // Declare gloabl URL for image preview
    let PREVIEW_URL = "";

    // Assign image preview URL if file exists
    if (values.file) {
      PREVIEW_URL = URL.createObjectURL(values.file);
    }
    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Add details - {storeName}</title>
        </Helmet>

        <div className="App-container">
          {/* Page header */}
          <div className="header">
            <h1 className="header__title">What are you selling?</h1>
          </div>

          {/* Form field */}
          <div>
            {/* Image preview */}
            <div>
              <ExifOrientationImg
                className="product-form__img"
                src={PREVIEW_URL}
                alt={values.file.name}
              />
            </div>

            {/* Product name field */}
            <div>
              <h3 className="product-form__label">Product name</h3>
              <Field
                name="name"
                validate={this.validateName}
                render={({ field, form }) => (
                  <GenericInput
                    {...field}
                    {...form}
                    placeholder={"Awesome sauce"}
                  />
                )}
              />
            </div>

            {/* Product price field */}
            <div>
              <h3 className="product-form__label">Price</h3>
              <Field
                name="price"
                validate={this.validatePrice}
                render={({ field, form }) => (
                  <LabelInput
                    {...field}
                    {...form}
                    mask={numberMask}
                    label={"KSH"}
                    plac
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* Page footer */}
        {loading ? (
          <div className="footer__loader-container">
            <div className="footer__loader-body">
              <div className="footer__loader">
                <SimpleLoader />
              </div>
            </div>
          </div>
        ) : (
          <div className="footer">
            <div className="footer__body">
              <button
                type="submit"
                className={
                  nameValid && priceValid
                    ? "footer__btn"
                    : "footer__btn footer__btn--disabled"
                }
                disabled={!(nameValid && priceValid) || loading}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default DetailsForm;
