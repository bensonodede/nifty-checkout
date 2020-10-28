import React, { useContext } from "react";
import { Field } from "formik";

// Import components
import {
  EditProductDetailsNameInput,
  EditProductDetailsPriceInput,
  EditProductDetailsDescriptionInput,
  EditProductDetailsQuantityInput,
  EditProductDetailsImagesInput,
} from "./EditProductDetailsInput";
import EditProductDetailsOptionsEmpty from "./EditProductDetailsOptionsEmpty";
import EditProductDetailsOptionsList from "./EditProductDetailsOptionsList";
import EditProductDetailsFooter from "./EditProductDetailsFooter";
import EditProductContext from "../../EditProductContext";
import { validateName, validateFileUrls } from "components/validation";

const EditProductDetailsFields = ({ isFormValid, values }) => {
  // Get mutation state values
  const { mutationLoading } = useContext(EditProductContext);

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
          component={EditProductDetailsImagesInput}
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
          component={EditProductDetailsNameInput}
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
          component={EditProductDetailsPriceInput}
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
          component={EditProductDetailsDescriptionInput}
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
              component={EditProductDetailsQuantityInput}
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
          <EditProductDetailsOptionsList values={values} />
        ) : (
          <EditProductDetailsOptionsEmpty values={values} />
        )}
      </div>

      {/* Add product footer */}
      <EditProductDetailsFooter
        isDisabled={!isFormValid}
        onClick={null}
        isLoading={mutationLoading}
        isFilesUploaded={values.isFilesUploaded}
      />
    </>
  );
};

export default EditProductDetailsFields;
