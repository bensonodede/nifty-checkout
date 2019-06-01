import React from "react";
import { Formik, Form } from "formik";

//
const PhoneForm = props => (
  <Formik
    initialValues={{ file: "", name: "", price: "" }}
    validateOnChange={false}
    validateOnBlur={false}
    onSubmit={(values, actions) => {
      console.log(values);
    }}
  >
    {FormikProps => (
      <Form>{React.cloneElement(props.children, { exampleProp: "500" })}</Form>
    )}
  </Formik>
);

export default PhoneForm;
