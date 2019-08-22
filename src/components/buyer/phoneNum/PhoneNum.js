import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import Cookies from "js-cookie";
import { Mutation } from "react-apollo";
import { Helmet } from "react-helmet";

//  Import components
import { PulseBtn } from "../../button";
import { Icon } from "react-icons-kit";
import { arrow_right } from "react-icons-kit/ikons/arrow_right";
import { LabelInput } from "../../input";
import { validatePhoneNum } from "../../validation";
import { CREATE_ORDER } from "../../graphql/mutation";
import { Loader } from "../../loader";
import { ScrollToTop } from "../../utils";

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
  constructor(props) {
    super(props);

    // Set cookies to state
    this.state = {
      phoneNum: Cookies.get("phoneNum") || null
    };
  }

  // Prevent submission on enter press
  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

  // Handle form submit
  handleSubmit = async (values, actions, createOrder) => {
    // Destructure route parameters
    let { storeName } = this.props.match.params;
    let { price, id } = this.props.location.state.data;

    // Get phone number
    let { phoneNum } = values;

    // Remove empty spaces from phone number and prepend country code
    const buyerNum = "254" + phoneNum.replace(/\D+/g, "");

    // Set phone number as cookie
    await Cookies.set("phoneNum", buyerNum, { expires: 10000 });

    // Set form submitting state to true
    await actions.setSubmitting(true);

    // Run mutation to create order
    await createOrder({
      variables: {
        buyerNum,
        storeName,
        productID: id,
        price
      }
    });

    // Set form submitting state to false
    await actions.setSubmitting(false);

    // Reset form
    // await actions.resetForm({});
  };

  render() {
    // Destructure route parameters
    let { storeName, humanId } = this.props.match.params;

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Phone number - {storeName}</title>
        </Helmet>

        {/* Scroll to top of the page */}
        <ScrollToTop />

        {/* Mutation */}
        <Mutation
          mutation={CREATE_ORDER}
          onCompleted={data => {
            console.log(data);
            this.props.history.push({
              pathname: `/${storeName}/${humanId}/waiting`,
              state: { orderId: data.createOrder.id }
            });
          }}
        >
          {(createOrder, { loading, error }) => {
            if (error) {
              this.props.history.push(`/${storeName}/${humanId}`);
            }

            return (
              <Formik
                initialValues={{ phoneNum: "" }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, actions) =>
                  this.handleSubmit(values, actions, createOrder)
                }
              >
                {formikProps => (
                  <Form onKeyPress={this.onKeyPress}>
                    <div className="App-container phoneNum">
                      {/* Phone number header */}
                      <div className="phoneNum__header">
                        <h1 className="phoneNum__title">
                          What's your phone number?
                        </h1>
                      </div>

                      {/* Phone number description 1*/}
                      <div className="phoneNum__description">
                        <span
                          role="img"
                          aria-label="call-hand"
                          className="phoneNum__emoji"
                        >
                          ✔️
                        </span>

                        <p className="phoneNum__description-text">
                          Please make sure this phone number is{" "}
                          <span className="phoneNum__description-text--bold">
                            {" "}
                            M-pesa{" "}
                          </span>{" "}
                          enabled.
                        </p>
                      </div>

                      {/* Phone number description 2 */}

                      <div className="phoneNum__description">
                        <span
                          role="img"
                          aria-label="call-hand"
                          className="phoneNum__emoji"
                        >
                          🤙🏾
                        </span>
                        <p className="phoneNum__description-text">
                          We'll use it to contact you after you make your
                          purchase.
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
                    {loading ? (
                      <div className="footer__loader-container">
                        <div className="footer__loader-body">
                          <div className="footer__loader">
                            <Loader />
                          </div>
                        </div>
                      </div>
                    ) : (
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
                    )}
                    {/* End Page footer */}
                  </Form>
                )}
              </Formik>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default PhoneNum;
