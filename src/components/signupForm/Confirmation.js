import React, { Component } from "react";
import { Field } from "formik";

// Import components
import ReactCodeInput from "react-code-input";

// Import styles
import "../../styles/index.css";
import "../../styles/seller/SignUp.css";

const props = {
  type: "number",
  fields: 6,
  inputStyle: {
    height: "12vw",
    width: "12.5vw",
    margin: "0vw 0.5vw",
    border: "solid 1.2px #e5e5e5",
    borderRadius: "10vw",
    MozAppearance: "textfield",
    outline: "none",

    // Font styling
    fontFamily: "airbnb_cereal_appbook",
    fontSize: "6vw",
    textAlign: "center",
    color: "#484848"
  }

  // inputStyleInvalid: {}
};

class Confirmation extends Component {
  render() {
    let { setFieldValue, name, value, errors, mask, label } = this.props;

    console.log(this.props);
    return (
      <div className="App-container">
        {/*  */}
        <div className="header">
          <h1 className="header__title">What's the code?</h1>
          <p className="header__sub-title">
            Enter the code sent to +24724645546
          </p>
        </div>

        {/*  */}
        <div className="signup__code-input">
          <Field
            name="code"
            render={() => (
              <ReactCodeInput
                {...props}
                onChange={val => {
                  setFieldValue("code", val);
                }}
              />
            )}
          />
        </div>

        {/*  */}
        <div>
          <button>Resend code</button>
        </div>
      </div>
    );
  }
}

export default Confirmation;
