import React, { Component } from "react";
import { instanceOf } from "prop-types";

import { Formik, Field, Form } from "formik";
import { withCookies, Cookies } from "react-cookie";

//  Import components
import { PulseBtn } from "../../button";
import { Icon } from "react-icons-kit";
import { arrow_right } from "react-icons-kit/ikons/arrow_right";
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
      phoneNum: cookies.get("phoneNum") || ""
    };
  }

  // Prevent submission on enter press
  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

  //
  handleSubmit = async (values, actions) => {
    let { phoneNum } = values;

    // Remove empty spaces from phone number and prepend country code
    phoneNum = "+254" + phoneNum.replace(/\D+/g, "");

    console.log(phoneNum);

    const { cookies } = this.props;

    cookies.set("phoneNum", phoneNum, { path: "/" });
  };

  render() {
    return (
      <Formik
        initialValues={{ phoneNum: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => this.handleSubmit(values, actions)}
      >
        {formikProps => (
          <Form onKeyPress={this.onKeyPress}>
            <div className="phoneNum">
              {/* Phone number header */}
              <div className="phoneNum__header">
                <h1 className="phoneNum__title">What's your phone number?</h1>
              </div>

              {/* Phone numeber description */}
              <div className="phoneNum__description">
                <p className="phoneNum__description-text">
                  We use your phone number to confirm your payment. Also, we
                  would like to contact you after you make your purchase .{" "}
                  <span role="img" aria-label="call-hand">
                    🤙🏾
                  </span>
                </p>
              </div>

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
              {/* Page footer */}
              <div className="phoneNum__footer">
                <PulseBtn
                  dark={true}
                  type={"submit"}
                  disabled={!formikProps.isValid}
                  btnStyle={
                    formikProps.isValid
                      ? "phoneNum__btn"
                      : "phoneNum__btn--disabled"
                  }
                  onClick={this.handleClick}
                  isPaused={formikProps.isValid ? false : true}
                >
                  <div className="phoneNum__icon">
                    <Icon size={"100%"} icon={arrow_right} />
                  </div>
                </PulseBtn>
              </div>
              {/* End Page footer */}
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withCookies(PhoneNum);
