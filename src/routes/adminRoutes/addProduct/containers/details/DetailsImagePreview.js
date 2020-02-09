import React from "react";
import ExifOrientationImg from "react-exif-orientation-img";

const DetailsImagePreview = ({ file }) => {
  // Declare gloabl URL for image preview
  let PREVIEW_URL = "";

  // Assign image preview URL if file exists
  if (file) {
    PREVIEW_URL = URL.createObjectURL(file);
  }

  return (
    <ExifOrientationImg
      className="details-image-preview"
      src={PREVIEW_URL}
      alt={file.name}
    />
  );
};

export default DetailsImagePreview;
