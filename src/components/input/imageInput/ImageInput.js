import React from "react";

// Import components
import ImageUpload from "./ImageUpload";
import ImageRemove from "./ImageRemove";

const ImageInput = ({ field, form }) => (
  <>
    {field.value ? (
      <ImageRemove {...field} {...form} />
    ) : (
      <ImageUpload {...field} {...form} />
    )}
  </>
);

export default ImageInput;
