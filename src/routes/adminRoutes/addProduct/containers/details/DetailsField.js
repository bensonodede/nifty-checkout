import React, { useContext } from "react";
import { Field } from "formik";

// Import components
import {
  DetailsNameInput,
  DetailsPriceInput,
  DetailsDescriptionInput
} from "./DetailsInput";
import { validateName } from "components/validation";
import AddProductFooter from "../addProductFooter";
import AddProductContext from "../../AddProductContext";

const DetailsField = ({ isValid }) => {
  // Get mutation state values
  const { loading } = useContext(AddProductContext);

  return (
    <>
      {/* Product name field */}
      <div className="details-field">
        <h5 className="details-field__label title is-size-7 is-marginless">
          PRODUCT NAME
        </h5>
        <Field
          name="name"
          validate={validateName}
          component={DetailsNameInput}
        />
      </div>

      {/* Product price field */}
      <div className="details-field">
        <h5 className="details-field__label title is-size-7 is-marginless">
          PRICE
        </h5>
        <Field
          name="price"
          validate={validateName}
          component={DetailsPriceInput}
        />
      </div>

      {/* Product description field */}
      <div className="details-field">
        <h5 className="details-field__label title is-size-7 is-marginless">
          PRODUCT DESCRIPTION
        </h5>
        <Field
          name="description"
          validate={validateName}
          component={DetailsDescriptionInput}
        />
      </div>

      {/* Add product footer */}
      <AddProductFooter
        isDisabled={!isValid}
        type={"submit"}
        onClick={null}
        isLoading={loading}
      />
    </>
  );
};

export default DetailsField;
