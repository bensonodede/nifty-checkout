import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";

class Thumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      thumb: undefined
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>Loading. . .</p>;
    }
    return <img src={thumb} alt={file.name} className="" />;
  }
}

//! Form: Image, Title, Price
const AddImageSchema = Yup.object().shape({
  file: Yup.mixed().required()
});

class AddImage extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ file: "" }}
          validationSchema={AddImageSchema}
          validateOnChange={true}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ isValid, values, setFieldValue }) => (
            <Form>
              {/* Page body */}
              <div className="App-container">
                {/* Page header */}
                <div className="header">
                  <h1 className="header__title">What are you selling?</h1>
                </div>

                {/* Form field */}
                <div className="product-name-form">
                  <p className="product-name-form__label">
                    Lastly, show us what it looks like.
                  </p>
                  <input
                    name="file"
                    type="file"
                    className="product-name-form__input"
                    onChange={event => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                  />
                </div>
                <ErrorMessage name="file" />
                <p>{values.file.name}</p>
                <p>{values.file.type}</p>
                <p>{values.file.size}</p>
                <Thumb file={values.file} />
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

export default AddImage;
