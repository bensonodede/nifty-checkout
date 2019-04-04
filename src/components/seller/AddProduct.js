import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";
import "../../styles/chocolat.css";

//! Form: Image, Title, Price
const AddProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "That's too short.")
    .max(20, "That's too many characters(20 or less).")
    .required("Please fill in this field")
});

class AddProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: false
    };
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ title: "" }}
          validationSchema={AddProductSchema}
          validateOnChange={false}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ isValid, errors }) => (
            <Form>
              <div className="App-container">
                {/* Page header */}
                <div className="header">
                  <h1 className="header__title">What are you selling?</h1>
                </div>

                {/* Form field */}
                <div className="product-form">
                  <p className="product-form__label">
                    First, tell us what it's called.
                  </p>
                  <Field
                    type="text"
                    className={
                      "product-form__input-text " +
                      (errors.title ? "product-form__input-text--error" : null)
                    }
                    name="title"
                  />
                  {
                    <p className="product-form__error-message">
                      {errors.title}
                    </p>
                  }
                </div>
              </div>
              {/* Page footer */}
              <div className="footer">
                <div className="footer__body">
                  <button className="footer__btn" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default AddProduct;
