import React from "react";
import { Field } from "formik";

// Import components
import {
  EditProductOptionPriceInput,
  EditProductOptionQuantityInput,
  EditProductOptionPublishInput,
} from "./EditProductOptionInput";
import Button from "components/button";

// ! Field array validation is buggy
// import { validateName } from "components/validation";

// Import styles
import "./styles.scss";

const EditProductOptionFields = ({
  variantIndex,
  history,
  location,
  storeUsername,
  productId,
}) => (
  <>
    {/* Price field */}
    <div className="add-product-details-field">
      <h5 className="add-product-details-field__label title is-size-7">
        PRICE
      </h5>
      <Field
        name={`variants.${[variantIndex]}.price`}
        validate={null}
        component={EditProductOptionPriceInput}
      />
    </div>

    <br />

    {/* Quantity field  */}
    <div className="add-product-details-field">
      <h5 className="add-product-details-field__label title is-size-7">
        QUANTITY
      </h5>
      <Field
        name={`variants.${[variantIndex]}.quantity`}
        validate={null}
        component={EditProductOptionQuantityInput}
      />
    </div>

    <br />

    {/* Publish field */}
    <div className="add-product-details-field">
      <h5 className="add-product-details-field__label title is-size-7">
        PUBLISH
      </h5>

      <p className="has-text-grey-light">
        Would you like to make this particular product option available for
        purchase?
      </p>

      <Field
        name={`variants.${[variantIndex]}.publish`}
        validate={null}
        component={EditProductOptionPublishInput}
      />
    </div>

    {/* Product option footer */}
    <div className="add-product-option-footer">
      <Button
        type="button"
        onClick={() => {
          history.push(`/${storeUsername}/admin/products/edit/${productId}`);
        }}
      >
        Done
      </Button>
    </div>
  </>
);

export default EditProductOptionFields;
