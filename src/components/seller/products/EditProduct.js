import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Mutation } from "react-apollo";
import numeral from "numeral";

// Import components
import { validateImage, validateName } from "../../validation";
import { LabelInput, GenericInput } from "../../input";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import Thumb from "../createProduct/Thumb";
import { UPDATE_PRODUCT } from "../../graphql/mutation";
import { Loader } from "../../loader";

// Import icons
import { Icon } from "react-icons-kit";
import { iosCloudUploadOutline } from "react-icons-kit/ionicons/iosCloudUploadOutline";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";

// Import styles
import "./styles.css";

// Number mask input definition
const numberMask = createNumberMask({
  prefix: "",
  suffix: "",
  allowDecimal: true
});

class EditProduct extends Component {
  constructor(props) {
    super(props);

    //
    this.state = {
      PREVIEW_URL: ""
    };
  }

  componentDidMount() {
    // Set image preview
    let { imgUrl } = this.props.location.state;
    this.setState({ PREVIEW_URL: imgUrl });
  }

  handleSubmit = async (values, actions, mutate) => {
    let { file, name, price } = values;
    let { id } = this.props.match.params;
    let { imgUrl } = this.props.location.state;

    // Remove commas from string and convert to float
    price = await parseFloat(price.replace(",", ""));

    // Run mutation to create store
    await mutate({
      variables: {
        id,
        imgUrl,
        file,
        name,
        price
      }
    });

    // Set form submitting state to false
    await actions.setSubmitting(false);
  };

  render() {
    // Destructure route props
    let { name, price } = this.props.location.state;
    let { storeName } = this.props.match.params;

    // Format price and convert to string
    price = numeral(price).format("'0,0'");

    // Destructure state
    let { PREVIEW_URL } = this.state;

    return (
      <Mutation
        mutation={UPDATE_PRODUCT}
        onCompleted={data => {
          // Redirect to store product page
          this.props.history.push(`/${storeName}/products`);
        }}
      >
        {(mutate, { loading, error }) => {
          if (error) {
            console.log(error);
          }

          return (
            <div>
              <Formik
                initialValues={{
                  file: "",
                  name,
                  price
                }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, actions) =>
                  this.handleSubmit(values, actions, mutate)
                }
              >
                {({ setFieldValue, setFieldError, dirty, isValid }) => (
                  <Form>
                    <div className="App-container">
                      {/* Page header */}
                      <div className="header">
                        <h1 className="header__title">Edit Product</h1>
                      </div>

                      {/*********** Image upload ***********/}

                      {!PREVIEW_URL ? (
                        <div className="product-form">
                          {/* Image placeholder */}
                          <div className="product-form__image-placeholder">
                            <div className="product-form__placeholder-background">
                              <label
                                className="product-form__image-label"
                                htmlFor="file"
                              >
                                {/* Image upload button icon */}
                                <Icon
                                  icon={iosCloudUploadOutline}
                                  size={23}
                                  style={{ color: "#ffffff" }}
                                />

                                {/* Image upload button text */}
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
                            accept="image/jpg, image/jpeg, image/png"
                            className="product-form__image-input"
                            onChange={event => {
                              // Destructure file from array
                              let [file] = event.currentTarget.files;

                              // Validate image
                              validateImage(file)
                                .then(() => {
                                  // Set file value in formik field
                                  setFieldValue("file", file);

                                  // Clear any file errors
                                  setFieldError("file");

                                  // Set preview URL for thumbnail
                                  this.setState({
                                    PREVIEW_URL: URL.createObjectURL(file)
                                  });
                                })

                                // Catch validation error
                                .catch(error => {
                                  setFieldError("file", error);
                                });
                            }}
                          />
                        </div>
                      ) : (
                        <div>
                          {/* Remove image button  */}
                          <div
                            className="product-form__image-delete"
                            onClick={() => {
                              // Declare value as empty string
                              let val = "";

                              // Reset file value
                              setFieldValue("file", val);

                              //  Remove preview image
                              this.setState({ PREVIEW_URL: val }, () => {
                                // Validate image
                                validateImage(val)
                                  // Param is empty string therefore function always throws error
                                  .catch(error => {
                                    // Set Formik error
                                    setFieldError("file", error);
                                  });
                              });
                            }}
                          >
                            {/* Remove image button icon */}
                            <Icon
                              icon={iosTrashOutline}
                              size={25}
                              style={{ color: "#fc5e5e" }}
                            />

                            {/* Remove image button text */}
                            <p className="product-form__image-delete-text">
                              Remove
                            </p>
                          </div>
                        </div>
                      )}

                      {/*  Thumbnail component  */}
                      <Thumb
                        className="product-form__thumbnail"
                        file={PREVIEW_URL}
                      />

                      {/********** Product name field **********/}

                      <div>
                        <p className="product-form__label">PRODUCT NAME</p>
                        <Field
                          name="name"
                          validate={validateName}
                          render={({ field, form }) => (
                            <GenericInput {...field} {...form} />
                          )}
                        />
                      </div>

                      {/********** Product price field  **********/}

                      <div>
                        <p className="product-form__label">PRICE</p>
                        <Field
                          name="price"
                          validate={validateName}
                          render={({ field, form }) => (
                            <LabelInput
                              {...field}
                              {...form}
                              mask={numberMask}
                              label={"KES"}
                            />
                          )}
                        />
                      </div>
                    </div>

                    {/********** Page footer **********/}

                    <div className="footer">
                      {/* Mutation loader */}
                      {loading ? (
                        <div className="footer__loader-body">
                          <div className="footer__loader">
                            <Loader />
                          </div>
                        </div>
                      ) : (
                        <div className="footer__body">
                          {/* Submit button */}
                          <button
                            type="submit"
                            className={
                              dirty && isValid
                                ? "footer__btn"
                                : "footer__btn footer__btn--disabled"
                            }
                            disabled={!(dirty && isValid)}
                          >
                            Save
                          </button>
                        </div>
                      )}
                    </div>

                    {/********** End page footer **********/}
                  </Form>
                )}
              </Formik>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default EditProduct;
