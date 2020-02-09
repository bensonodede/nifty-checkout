import React from "react";
import { withRouter } from "react-router-dom";
import { Field } from "formik";

// Import components
import { GenericInput } from "components/input";
import { validateName } from "components/validation";
import CreateStoreFooter from "../CreateStoreFooter";

// Store name input component
const StoreNameInput = ({ field, form }) => (
  <GenericInput {...field} {...form} placeholder={"Kickass kicks"} />
);

// Store name field
const StoreNameField = ({ history, isValid }) => (
  <>
    <div className="create-store-field">
      {/* Store name field label */}
      <h5 className="create-store-field-label title is-size-7 is-marginless">
        STORE NAME
      </h5>

      {/* Store name field */}
      <Field
        name="storeName"
        validate={validateName}
        component={StoreNameInput}
      />
    </div>

    {/* Store name footer */}
    <CreateStoreFooter
      isDisabled={!isValid}
      type={"button"}
      onClick={() => history.push("/create-store/username")}
    />
  </>
);

export default withRouter(StoreNameField);
