import React from "react";
import { withRouter } from "react-router-dom";
import { Field } from "formik";

// Import components
import CreateStoreFooter from "../CreateStoreFooter";
import { QueryInput } from "components/input";
import { validateName } from "components/validation";

// Import graphql query
import { STORE_USERNAME_EXISTS_QUERY } from "components/graphql/query";

// Store username input
const StoreUsernameInput = ({ field, form }) => (
  <QueryInput
    {...field}
    {...form}
    query={STORE_USERNAME_EXISTS_QUERY}
    queryVariable={"storeUsername"}
    queryResultName={"usernameExists"}
    queryErrorMessage={"username is not available"}
    placeholder={"kickasskicks"}
    mask={(s) => Array.from(s).map(() => /[a-zA-Z0-9]+/)}
  />
);

const StoreUsernameField = ({ history, isValid }) => (
  <>
    <div className="create-store-field">
      {/* Store username field label */}
      <h5 className="create-store-field-label title is-size-7">USERNAME</h5>

      {/* Store username field */}
      <Field
        name="storeUsername"
        validate={validateName}
        component={StoreUsernameInput}
      />
    </div>

    {/* Username footer */}
    <CreateStoreFooter
      isDisabled={!isValid}
      type={"button"}
      onClick={() => history.push("/create-store/phone-number")}
    />
  </>
);

export default withRouter(StoreUsernameField);
