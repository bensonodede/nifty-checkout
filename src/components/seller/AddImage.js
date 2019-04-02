import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Icon } from "react-icons-kit";
import { iosCloudUploadOutline } from "react-icons-kit/ionicons/iosCloudUploadOutline";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";

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
    return (
      <img src={thumb} alt={file.name} className="product-form__thumbnail" />
    );
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
          {({ isValid, errors, values, setFieldValue, resetForm }) => (
            <Form>
              {/* Page body */}
              <div className="App-container">
                {/* Page header */}
                <div className="header">
                  <h1 className="header__title">Add a photo</h1>
                </div>

                {/* Form field */}
                {!isValid ? (
                  <div className="product-form">
                    {/* Image upload label */}
                    <p className="product-form__label">
                      First, show us what it looks like.
                    </p>

                    {/* Image upload button */}
                    <div className="product-form__image-placeholder">
                      <div className="product-form__placeholder-background">
                        <label
                          className="product-form__image-label"
                          htmlFor="file"
                        >
                          <Icon
                            icon={iosCloudUploadOutline}
                            size={23}
                            style={{ color: "#ffffff" }}
                          />
                          <p className="product-form__label-text">
                            Upload photo
                          </p>
                        </label>
                      </div>
                    </div>

                    {/* File input */}
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
                ) : (
                  <div
                    className="product-form__image-delete"
                    onClick={() => {
                      resetForm({ file: "" });
                    }}
                  >
                    <Icon
                      icon={iosTrashOutline}
                      size={25}
                      style={{ color: "#ffffff" }}
                    />
                    <p className="product-form__image-delete-text">Remove</p>
                  </div>
                )}
                <Thumb className="product-form__thumbnail" file={values.file} />

                {/* Image upload errors */}

                <p className="product-form__error-message ">{errors.file}</p>
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
