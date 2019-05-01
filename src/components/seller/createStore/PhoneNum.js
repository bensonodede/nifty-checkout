import React, { Component } from "react";
import { withFirebase } from "../../firebase";
import { Field } from "formik";
import v8n from "v8n";

// Import styles
import "./styles.css";

// Import components
import LabelInput from "../../input/LabelInput";

// Number mask input definition
const phoneNumMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/
];

class PhoneNumPage extends Component {
  constructor(props) {
    super(props);

    // Define component state
    this.state = {
      valid: false
    };
  }

  /********** IsValid function **********/

  _isValid(param) {
    // Declare global error variable
    let error;

    // Check for a string with 11 characters, account for 2 spaces from text-mask
    const validation = v8n()
      .string()
      .minLength(11);

    // If value does not pass regex test
    if (!validation.test(param)) {
      this.setState({ valid: false });

      // Set error message
      error = " ";
    }

    //If input value passes validation, set valid state
    else {
      this.setState({ valid: true });
    }

    return error;
  }

  /********** Phone number validation **********/

  validatePhoneNum = value => {
    // Check if value if valid
    return this._isValid(value);
  };

  componentDidMount() {
    // Get initial value on mount
    let { phoneNum } = this.props.values;

    // Check if input is valid
    this._isValid(phoneNum);
  }

  componentWillReceiveProps(nextProps) {
    let { storeName } = nextProps.values;

    if (storeName === "" || storeName === undefined) {
      this.props.history.push("/signup/store-name");
    }

    // Declare props variables
    let nextVal = nextProps.values.phoneNum;
    let val = this.props.values.phoneNum;

    //If new prop is received...
    if (nextVal !== val) {
      // Check if new value is valid
      this._isValid(nextVal);
    }
  }

  render() {
    // Get input field valid state
    let { valid } = this.state;

    return (
      <div>
        <div className="App-container">
          {/* Phone number page header */}
          <div className="header">
            <h1 className="header__title">And, your phone number?</h1>

            {/* Phone number page subtitle */}
            <p className="header__text">
              You should be able to receive texts and calls from your customers
              on this number.
            </p>
          </div>

          {/* Phone number input field */}
          <div>
            {/* Phone number input label */}
            <p className="signup__label">PHONE NUMBER</p>
            <Field
              name="phoneNum"
              validate={this.validatePhoneNum}
              render={({ field, form }) => (
                <LabelInput
                  {...field}
                  {...form}
                  label={"+254"}
                  mask={phoneNumMask}
                />
              )}
            />
          </div>
        </div>

        {/* Page footer */}
        <div className="footer">
          <div className="footer__body">
            {/* Footer button */}
            <button
              type="submit"
              className={
                valid ? "footer__btn" : "footer__btn footer__btn--disabled"
              }
              disabled={!valid}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const PhoneNum = withFirebase(PhoneNumPage);

export default PhoneNum;
