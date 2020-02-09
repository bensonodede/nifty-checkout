import React from "react";
import ExifOrientationImg from "react-exif-orientation-img";

// Import styles
import "./styles.scss";

// Thumbnail component
const Thumb = ({ file }) => {
  // If no file has been uploaded, don't show thumbnail
  if (!file) {
    return null;
  }

  let preview;

  // Create URL if file is object
  if (typeof file === "object") {
    preview = URL.createObjectURL(file);
  }

  if (typeof file === "string") {
    preview = file;
  }

  // If image file exists, return image
  return (
    <>
      <ExifOrientationImg src={preview} alt={preview} className="thumb" />
    </>
  );
};

export default Thumb;
