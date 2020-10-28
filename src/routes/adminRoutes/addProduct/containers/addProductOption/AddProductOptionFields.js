import React from "react";
import { Field } from "formik";

// Import components
import {
  AddProductOptionPriceInput,
  AddProductOptionQuantityInput,
  AddProductOptionPublishInput,
} from "./AddProductOptionInput";
import Button from "components/button";

// ! Field array validation is buggy
// import { validateName } from "components/validation";

// Import styles
import "./styles.scss";

const AddProductOptionFields = ({ variantIndex, history, storeUsername }) => (
  <>
    {/* Price field */}
    <div className="add-product-details-field">
      <h5 className="add-product-details-field__label title is-size-7">
        PRICE
      </h5>
      <Field
        name={`variants.${[variantIndex]}.price`}
        validate={null}
        component={AddProductOptionPriceInput}
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
        component={AddProductOptionQuantityInput}
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
        component={AddProductOptionPublishInput}
      />
    </div>

    {/* Product option footer */}
    <div className="add-product-option-footer">
      <Button
        type="button"
        onClick={() => {
          history.push(`/${storeUsername}/admin/products/add-product`);
        }}
      >
        Done
      </Button>
    </div>
  </>
);

export default AddProductOptionFields;
