import React, { Component } from "react";
import { withFirebase } from "../firebase";
import { Field } from "formik";

// Import styles
import "./styles.css";

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

class PhoneNumPage extends Component {
  constructor() {
    super();
    this.state = {
      valid: false
    };
  }

  componentDidMount() {
    let { history } = this.props;
    let { storeName } = this.props.values;
    console.log(this.props);

    // If image value does not exist, redirect 'store-name' route
    if (storeName === "") {
      // history.push("/signup/store-name");
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
    let { phoneNum } = this.props.values;
    phoneNum = phoneNum.replace(/\D+/g, "");
    let { valid } = this.state;

    console.log(phoneNum);

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
              type="button"
              className={
                valid ? "footer__btn" : "footer__btn footer__btn--disabled"
              }
              disabled={!valid}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const PhoneNum = withFirebase(PhoneNumPage);

export default PhoneNum;
