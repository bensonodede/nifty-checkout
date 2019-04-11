import React, { Component } from "react";
import { Field } from "formik";
import { Link } from "react-router-dom";

// Import components
import GenericInput from "../input/GenericInput";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/SignUp.css";

// Store name validation
let validateName = value => {
  let error;
  let nameRegex = /^[a-z]+[0-9]\/\s,.-]+$/i;
  if (!value) {
    error = " ";
  } else if (nameRegex.test(value)) {
    error = " ";
  }
  return error;
};

class StoreName extends Component {
  constructor() {
    super();
    this.state = {
      valid: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // Define props and regex test
    let nextVal = nextProps.values.storeName;
    let val = this.props.values.storeName;
    let nameRegex = /^[a-z]+[0-9]\/\s,.-]+$/i;

    //If new prop is received...
    if (nextVal !== val) {
      // If new value is empty
      if (!nextVal) {
        this.setState({ valid: false });
      }

      // If new value does not pass regex test
      else if (nameRegex.test(nextVal)) {
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
            <h1 className="header__title">What's the name of your store?</h1>
          </div>

          {/*  */}
          <div>
            <p className="header__sub-title">
              Something sleek sounding or super weird. Make it memorable.
              <span role="img" aria-label="raising-hands">
                🙌🏾
              </span>
            </p>
          </div>

          {/*  */}
          <div>
            {/*  */}
            <p className="signup__label">STORE NAME</p>
            <Field
              name="storeName"
              validate={validateName}
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
