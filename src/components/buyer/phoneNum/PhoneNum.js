import React, { Component } from "react";
import { instanceOf } from "prop-types";

import { Formik, Field, Form } from "formik";
import { withCookies, Cookies } from "react-cookie";

//  Import components

import { LabelInput } from "../../input";
import { validatePhoneNum } from "../../validation";

// Import styles
import "./styles.css";

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

class PhoneNum extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;

    this.state = {
      name: cookies.get("name") || "None"
    };
  }

  //
  handleSubmit = async (values, actions) => {
    console.log(values.phoneNum);
  };

  render() {
    //
    const { name } = this.state;

    return (
      <Formik
        initialValues={{ phoneNum: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => this.handleSubmit(values, actions)}
      >
        {formikProps => (
          <Form onSubmit={formikProps.handleSubmit}>
            <div className="App-container">
              {/* Phone number header */}
              <div className="header">
                <h1 className="header__title">What's your</h1>
                <h1 className="header__title">phone number?</h1>
              </div>

              {/* Phone numeber description */}
              <div className="description">
                <p className="description__text">
                  We use your phone number to confirm your payment. Also, the
                  seller might want to contact you.
                  <span role="img" aria-label="call-hand">
                    🤙🏾
                  </span>
                </p>
              </div>

              {/* Phone number input */}

              <p>{name}</p>

              {/* PhoneNum field  */}
              <Field
                name="phoneNum"
                validate={validatePhoneNum}
                render={({ field, form }) => (
                  <LabelInput
                    {...field}
                    {...form}
                    mask={phoneNumMask}
                    label={"+254"}
                    placeholder={"712 345 678"}
                  />
                )}
              />
            </div>
            {/* Page footer */}
            <div className="footer">
              <div className="footer__body">
                {/* Footer button */}
                <button
                  type="submit"
                  className={
                    formikProps.isValid
                      ? "footer__btn"
                      : "footer__btn footer__btn--disabled"
                  }
                  disabled={!formikProps.isValid}
                >
                  Done
                </button>
              </div>
            </div>
            {/* End Page footer */}
          </Form>
        )}
      </Formik>
    );
  }
}

export default withCookies(PhoneNum);
