import React, { useContext } from "react";
import { Field } from "formik";

// Import components
import {
  AddProductDetailsNameInput,
  AddProductDetailsPriceInput,
  AddProductDetailsDescriptionInput,
  AddProductDetailsQuantityInput,
  AddProductDetailsImagesInput,
} from "./AddProductDetailsInput";
import AddProductDetailsOptionsEmpty from "./AddProductDetailsOptionsEmpty";
import AddProductDetailsOptionsList from "./AddProductDetailsOptionsList";
import AddProductDetailsFooter from "./AddProductDetailsFooter";
import AddProductContext from "../../AddProductContext";
import { validateName, validateFileUrls } from "components/validation";

const AddProductDetailsFields = ({ isFormValid, values }) => {
  // Get mutation state values
  const { loading } = useContext(AddProductContext);

  return (
    <>
      {/* Product Images field */}
      <div className="add-product-details-field">
        <h5 className="add-product-details-field__label title is-size-7">
          IMAGES
        </h5>
        <Field
          name="imgUrls"
          validate={validateFileUrls}
          component={AddProductDetailsImagesInput}
        />
      </div>

      <br />

      {/* Product name field */}
      <div className="add-product-details-field">
        <h5 className="add-product-details-field__label title is-size-7">
          PRODUCT NAME
        </h5>
        <Field
          name="name"
          validate={validateName}
          component={AddProductDetailsNameInput}
        />
      </div>

      <br />

      {/* Product price field */}
      <div className="add-product-details-field">
        <h5 className="add-product-details-field__label title is-size-7">
          PRICE
        </h5>
        <Field
          name="price"
          validate={validateName}
          component={AddProductDetailsPriceInput}
        />
      </div>

      <br />

      {/* Product description field */}
      <div className="add-product-details-field">
        <h5 className="add-product-details-field__label title is-size-7">
          PRODUCT DESCRIPTION
        </h5>
        <Field
          name="description"
          validate={validateName}
          component={AddProductDetailsDescriptionInput}
        />
      </div>

      <br />

      {/* Product quantity field */}
      {values.variants[0] ? null : (
        <>
          <div className="add-product-details-field">
            <h5 className="add-product-details-field__label title is-size-7">
              QUANTITY
            </h5>
            <Field
              name="quantity"
              validate={null}
              component={AddProductDetailsQuantityInput}
            />
          </div>

          <br />
        </>
      )}

      {/* Product options list */}
      <div className="add-product-details-field">
        <h5 className="add-product-details-field__label title is-size-7">
          OPTIONS
        </h5>

        {values.variants[0] ? (
          <AddProductDetailsOptionsList values={values} />
        ) : (
          <AddProductDetailsOptionsEmpty values={values} />
        )}
      </div>

      {/* Add product footer */}
      <AddProductDetailsFooter
        isDisabled={!isFormValid}
        onClick={null}
        isLoading={loading}
        isFilesUploaded={values.isFilesUploaded}
      />
    </>
  );
};

export default AddProductDetailsFields;
