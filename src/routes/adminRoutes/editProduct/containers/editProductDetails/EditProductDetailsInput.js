import React from "react";

// Import components
import {
  GenericInput,
  LabelInput,
  TextareaInput,
  CounterInput,
  ImagesInput,
} from "components/input";
import { PriceMask } from "components/inputMask";

// Name input
const EditProductDetailsNameInput = ({ field, form }) => (
  <GenericInput {...field} {...form} placeholder={"T-shirt"} />
);

// Price input
const EditProductDetailsPriceInput = ({ field, form }) => (
  <LabelInput
    {...field}
    {...form}
    placeholder={"1,000"}
    mask={PriceMask}
    label={"KSH"}
  />
);

// Description input
const EditProductDetailsDescriptionInput = ({ field, form }) => (
  <TextareaInput
    {...field}
    {...form}
    minRows={5}
    maxRows={10}
    placeholder={"Enter text here..."}
  />
);

// Quantity input
const EditProductDetailsQuantityInput = ({ field, form }) => (
  <CounterInput
    {...field}
    {...form}
    placeholder={"0"}
    label={"Amount"}
    allowNegative={false}
  />
);

// Images input
const EditProductDetailsImagesInput = ({ form, field }) => (
  <ImagesInput
    {...field}
    {...form}
    instantUpload={true}
    allowMultiple={true}
    allowReorder={false}
    acceptedFileTypes={["image/*"]}
    maxFileSize={"3MB"}
  />
);

export {
  EditProductDetailsNameInput,
  EditProductDetailsPriceInput,
  EditProductDetailsDescriptionInput,
  EditProductDetailsQuantityInput,
  EditProductDetailsImagesInput,
};
