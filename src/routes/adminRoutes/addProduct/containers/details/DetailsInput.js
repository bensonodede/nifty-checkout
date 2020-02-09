import React from "react";

// Import components
import { GenericInput, LabelInput, TextareaInput } from "components/input";
import { PriceMask } from "components/inputMask";

// Name input
const DetailsNameInput = ({ field, form }) => (
  <GenericInput {...field} {...form} placeholder={"Awesome sauce"} />
);

// Price input
const DetailsPriceInput = ({ field, form }) => (
  <LabelInput
    {...field}
    {...form}
    placeholder={"1,000"}
    mask={PriceMask}
    label={"KSH"}
  />
);

// Description input
const DetailsDescriptionInput = ({ field, form }) => (
  <TextareaInput
    {...field}
    {...form}
    minRows={5}
    maxRows={10}
    placeholder={"Enter text here..."}
  />
);

export { DetailsNameInput, DetailsPriceInput, DetailsDescriptionInput };
