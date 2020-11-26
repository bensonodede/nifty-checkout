import React from "react";

// Import components
import {
  GenericInput,
  QueryInput,
  LabelInput,
  TextareaInput,
} from "components/input";
import { PhoneNumberMask } from "components/inputMask";
import { STORE_USERNAME_EXISTS_QUERY } from "components/graphql/query";

const StoreNameInput = ({ field, form }) => (
  <GenericInput {...field} {...form} placeholder={"Kickass kicks"} />
);

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

const PhoneNumberInput = ({ field, form }) => (
  <LabelInput
    {...field}
    {...form}
    mask={PhoneNumberMask}
    label={"+254"}
    placeholder={"724 645 546"}
  />
);

const PolicyReturnsInput = ({ field, form }) => (
  <TextareaInput
    {...field}
    {...form}
    minRows={5}
    maxRows={10}
    placeholder={"Enter text here..."}
  />
);

const PolicyDeliveryInput = ({ field, form }) => (
  <TextareaInput
    {...field}
    {...form}
    minRows={5}
    maxRows={10}
    placeholder={"Enter text here..."}
  />
);

export {
  StoreNameInput,
  StoreUsernameInput,
  PhoneNumberInput,
  PolicyReturnsInput,
  PolicyDeliveryInput,
};
