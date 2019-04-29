import React, { Component } from "react";
import { Field } from "formik";
import { Link } from "react-router-dom";
import v8n from "v8n";

// Import components
import GenericInput from "../../input/GenericInput";

// Import styles
import "./styles.css";

class StoreName extends Component {
  constructor() {
    super();

    // Define initial component state
    this.state = {
      valid: false
    };
  }

  // Function to check if input value validates the current field
  _isValid(param) {
    // Declare global error variable
    let error;

    // Check for a string with at least one character
    const validation = v8n()
      .string()
      .minLength(1);

    // If value does not pass regex test
    if (!validation.test(param)) {
      this.setState({ valid: false });

      // Set error message
      error = "Please fill in this field";
    }

    // If input value passes validation, set valid state
    else {
      this.setState({ valid: true });
    }

    return error;
  }

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

  componentWillReceiveProps(nextProps) {
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
        <div className="App-container">
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
            <p className="signup__label">STORE NAME</p>
            <Field
              name="storeName"
              validate={this.validateName}
              render={({ field, form }) => (
                <GenericInput {...field} {...form} />
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
