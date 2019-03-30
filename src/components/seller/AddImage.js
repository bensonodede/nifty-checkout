import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../../styles/index.css";
import "../../styles/seller/AddProduct.css";

//! Add button to clear selected image
class Thumb extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
      thumb: undefined
    };
  }

  componentWillReceiveProps(nextProps) {
    // If incoming props are empty, return null
    if (!nextProps.file) {
      return null;
    }

    // Set loading to true while file is being read
    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      //When reading is finished, set URL as thumb state
      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      // Read file as BASE64 encoded URL
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

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const AddImageSchema = Yup.object().shape({
  file: Yup.mixed()
    .required("Please upload a photo of the item.")
    .test(
      "fileFormat",
      "Oops! That's not an image.",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
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
          {({ isValid, errors, values, setFieldValue }) => (
            <Form>
              {/* Page body */}
              <div className="App-container">
                {/* Page header */}
                <div className="header">
                  <h1 className="header__title">What are you selling?</h1>
                </div>

                {/* Form field */}
                <div className="product-form">
                  {/* Image upload label */}
                  <p className="product-form__label">
                    Lastly, show us what it looks like.
                  </p>

                  {/* Image upload button */}
                  <div>
                    <label className="product-form__image-label" htmlFor="file">
                      Choose a file
                    </label>
                  </div>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    className="product-form__image-input"
                    onChange={event => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                  />
                </div>
                <p>{errors.file}</p>

                <Thumb file={values.file} />
              </div>

              {/* Page footer */}
              <div className="footer">
                <div className="footer__body">
                  <button
                    className={
                      isValid
                        ? "footer__btn"
                        : "footer__btn footer__btn--disabled"
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
