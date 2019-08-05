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
import { CREATE_ORDER } from "../../graphql/mutation";

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

    // Set cookies to state
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

  // Handle form submit
  handleSubmit = async (values, actions) => {
    let { phoneNum } = values;
    const { cookies } = this.props;

    // Remove empty spaces from phone number and prepend country code
    const buyerNum = "254" + phoneNum.replace(/\D+/g, "");

    // Set phone number as cookie
    await cookies.set("phoneNum", phoneNum, { path: "/" });

    // Set form submitting state to true
    await actions.setSubmitting(true);

    // Run mutation to create store
    // await createOrder({
    //   variables: {
    //     buyerNum,
    //     storeName
    //     // uid
    //   }
    // });

    // Set form submitting state to false
    await actions.setSubmitting(false);

    // Reset form
    await actions.resetForm({});

    // Redirect to success page
    // this.props.history.push(`/${storeName}/products`);
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
            <div className="App-container">
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
            </div>
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
                isPaused={formikProps.isValid ? false : true}
              >
                <div className="phoneNum__icon">
                  <Icon size={"100%"} icon={arrow_right} />
                </div>
              </PulseBtn>
            </div>
            {/* End Page footer */}
          </Form>
        )}
      </Formik>
    );
  }
}

export default withCookies(PhoneNum);
