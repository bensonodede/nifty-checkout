import React from "react";
import { Formik, Form } from "formik";
import { Helmet } from "react-helmet";

// Import components
import {
  SubscriptionPhoneNumberHeader,
  SubscriptionPhoneNumberDescription,
  SubscriptionPhoneNumberField,
} from "./containers";

const SubscriptionPhoneNumber = ({ match, history }) => {
  // Get store name
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet title={`Phone number · ${storeUsername}`} defer={false} />

      {/* Form */}
      <Formik
        initialValues={{ phoneNumber: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          // Get phone number value
          let { phoneNumber } = values;

          // Format phone number
          phoneNumber = "254" + phoneNumber.replace(/\s/g, "");

          // Navigate to subscription activation page
          history.push({
            pathname: `/${storeUsername}/admin/subscription/activate`,
            state: { phoneNumber },
          });
        }}
      >
        {({ isValid, touched: { phoneNumber: touchedPhoneNumber } }) => (
          <Form>
            <div className="route-wrapper">
              <div className="container">
                <div className="columns is-mobile is-multiline is-centered is-vcentered">
                  <div className="column is-10-mobile is-8-tablet is-4-desktop">
                    <SubscriptionPhoneNumberHeader />
                    <SubscriptionPhoneNumberDescription />
                    <SubscriptionPhoneNumberField
                      isValid={!!(isValid && touchedPhoneNumber)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SubscriptionPhoneNumber;
