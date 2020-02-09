import React, { Component } from "react";
import { Field } from "formik";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import v8n from "v8n";

// Import components
import { GenericMaskedInput } from "../../input";

// Import styles
import "./styles.css";
import ScrollToTop from "../../utils/ScrollToTop";

class StoreName extends Component {
  constructor() {
    super();

    // Define initial component state
    this.state = {
      valid: false
    };
  }

  // Function to check if input value validates the current field
  _isValid = param => {
    // Declare global error variable
    let error;

    // Check for a string with at least one character
    const validation = v8n()
      .string()
      .minLength(1)
      .not.includes(" ");

    // If value does not pass regex test
    if (!validation.test(param)) {
      this.setState({ valid: false });

      // Set error message
      error = " ";
    }

    // If input value passes validation, set valid state
    else {
      this.setState({ valid: true });
    }

    return error;
  };

  // Store name Formik Field level validation
  validateName = value => {
    // Check if value if valid
    return this._isValid(value);
  };

  componentDidMount() {
    // Get initial value on mount
    let val = this.props.values.storeName;

    // Check if input is valid
    this._isValid(val);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Declare props variables
    let nextVal = nextProps.values.storeName;
    let val = this.props.values.storeName;

    //If new prop is received...
    if (nextVal !== val) {
      // Check if new value is valid
      this._isValid(nextVal);
    }
  }

  render() {
    // Get component state
    let { valid } = this.state;

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Create a store - Store name - Finn</title>
        </Helmet>

        <ScrollToTop />
        {/* Store name component */}
        <div className="App-container store-name">
          {/* Store name page header */}
          <div className="header">
            <h1 className="header__title">What's the name of your store?</h1>
          </div>

          {/* Store name page header sub-title */}
          <div>
            <p className="header__sub-title">
              Something sleek sounding or super weird. Make it memorable.
              <span role="img" aria-label="raising-hands">
                🙌🏾
              </span>
            </p>
          </div>

          {/* Store name field */}
          <div>
            {/* Field label */}
            <h3 className="signup__label">STORE NAME</h3>
            <Field
              name="storeName"
              validate={this.validateName}
              render={({ field, form }) => (
                <GenericMaskedInput
                  placeholder={"xyzstore"}
                  mask={s => Array.from(s).map(() => /[A-Za-z0-9_]+/)}
                  {...field}
                  {...form}
                />
              )}
            />
          </div>
        </div>

        {/* Page footer */}
        <div className="footer">
          <div className="footer__body">
            <Link to="/signup/phone-number">
              <button
                type="button"
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

export default StoreName;
