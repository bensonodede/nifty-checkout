import React from "react";

// Import components
import { GenericInput, TagInput } from "components/input";

// Options title input
const AddProductOptionsTitleInput = ({ field, form, placeholder }) => (
  <GenericInput {...field} {...form} placeholder={placeholder} />
);

// Variants input
const AddProductOptionsVariantsInput = ({ field, form }) => (
  <TagInput
    {...field}
    {...form}
    placeholder={"Press ENTER to create value 👈"}
  />
);

export { AddProductOptionsTitleInput, AddProductOptionsVariantsInput };
