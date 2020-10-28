import React from "react";

import { LabelInput, CounterInput, SwitchInput } from "components/input";
import { PriceMask } from "components/inputMask";

// Price input
const EditProductOptionPriceInput = ({ field, form }) => (
  <LabelInput
    {...field}
    {...form}
    placeholder={"1,000"}
    mask={PriceMask}
    label={"KSH"}
  />
);

// Quantity input
const EditProductOptionQuantityInput = ({ field, form }) => (
  <CounterInput
    {...field}
    {...form}
    placeholder={"0"}
    label={"Amount"}
    allowNegative={false}
  />
);

// Publish input
const EditProductOptionPublishInput = ({ field, form }) => (
  <SwitchInput {...field} {...form} label={"Active"} />
);

export {
  EditProductOptionPriceInput,
  EditProductOptionQuantityInput,
  EditProductOptionPublishInput,
};
