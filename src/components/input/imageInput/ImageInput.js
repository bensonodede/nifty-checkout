import React from "react";

// Import components
import ImageUpload from "./ImageUpload";
import ImageRemove from "./ImageRemove";

const ImageInput = props => (
  <>{props.value ? <ImageRemove {...props} /> : <ImageUpload {...props} />}</>
);

export default ImageInput;
