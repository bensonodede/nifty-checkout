import React from "react";

// Import components
import { GenericInput, TagInput } from "components/input";

// Options title input
const EditProductOptionsTitleInput = ({ field, form, placeholder }) => (
  <GenericInput {...field} {...form} placeholder={placeholder} />
);

// Variants input
const EditProductOptionsVariantsInput = ({ field, form }) => (
  <TagInput
    {...field}
    {...form}
    placeholder={"Press ENTER to create value 👈"}
  />
);

export { EditProductOptionsTitleInput, EditProductOptionsVariantsInput };
