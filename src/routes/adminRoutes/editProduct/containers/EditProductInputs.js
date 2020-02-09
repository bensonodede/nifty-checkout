import React from "react";

// Import components
import {
  ImageInput,
  GenericInput,
  LabelInput,
  TextareaInput
} from "components/input";
import { PriceMask } from "components/inputMask";

// Image input
const EditImageInput = ({ form, field }) => <ImageInput {...form} {...field} />;

// Name input
const EditNameInput = ({ form, field }) => (
  <GenericInput {...field} {...form} placeholder={"Awesome sauce"} />
);

// Price input
const EditPriceInput = ({ form, field }) => (
  <LabelInput
    {...field}
    {...form}
    placeholder={"1,000"}
    mask={PriceMask}
    label={"KSH"}
  />
);

// Description input
const EditDescriptionInput = ({ form, field }) => (
  <TextareaInput
    {...field}
    {...form}
    minRows={5}
    maxRows={10}
    placeholder={"Enter text here..."}
  />
);

export { EditImageInput, EditNameInput, EditPriceInput, EditDescriptionInput };
