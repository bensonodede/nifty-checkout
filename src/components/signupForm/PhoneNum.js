import React, { Component } from "react";
import { Field } from "formik";
import { Link } from "react-router-dom";

// Import components
import LabelInput from "../input/LabelInput";

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

// Phone number validation
let validatePhoneNum = value => {
  let error;
  let numRegex = /(.*[0-9]){9}/i;
  if (!value) {
    error = " ";
    // error = null;
  } else if (!numRegex.test(value)) {
    error = " ";
    // error = null;
  }
  return error;
};

class PhoneNum extends Component {
  constructor() {
    super();
    this.state = {
      valid: false
    };
  }

  componentDidMount() {
    let { history } = this.props;
    let { storeName } = this.props.values;

    // If image value does not exist, redirect 'store-name' route
    if (storeName === "") {
      history.push("/signup/store-name");
    }
  }

  componentWillReceiveProps(nextProps) {
    // Define props and regex test
    let nextVal = nextProps.values.phoneNum;
    let val = this.props.values.phoneNum;
    let numRegex = /(.*[0-9]){9}/i;

    //If new prop is received...
    if (nextVal !== val) {
      // If new value is empty
      if (!nextVal) {
        this.setState({ valid: false });
      }

      // If new value does not pass regex test
      else if (!numRegex.test(nextVal)) {
        this.setState({ valid: false });
      }

      //Input is valid
      else {
        this.setState({ valid: true });
      }
    }
  }

  render() {
    let { valid } = this.state;

    return (
      <div>
        <div className="App-container">
          {/*  */}
          <div className="header">
            <h1 className="header__title">And, your phone number?</h1>
          </div>

          {/*  */}
          <div>
            <p className="header__sub-title">
              You should be able to receive texts and calls from your customers
              on this number.
            </p>
          </div>

          {/*  */}
          <div>
            {/*  */}
            <p className="signup__label">PHONE NUMBER</p>
            <Field
              name="phoneNum"
              validate={validatePhoneNum}
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
            <Link to="/signup/phone-number">
              <button
                type="button"
                className={
                  valid ? "footer__btn" : "footer__btn footer__btn--disabled"
                }
                disabled={!valid}
              >
                Verify
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default PhoneNum;
