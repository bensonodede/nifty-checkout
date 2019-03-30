import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";

//! Form: Image, Title, Price
const AddProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short")
    .max(20, "Too many words")
    .required("Please fill in this field")
});

class AddProduct extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ title: "" }}
          validationSchema={AddProductSchema}
          validateOnChange={true}
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
                  <input className="product-form__input-text" name="title" />
                </div>
              </div>

              {/* Page footer */}
              <div className="footer">
                <div className="footer__body">
                  <button
                    className={
                      !isValid
                        ? "footer__btn footer__btn--disabled"
                        : "footer__btn"
                    }
                    disabled={!isValid}
                    type="submit"
                  >
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
