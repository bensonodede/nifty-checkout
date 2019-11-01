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

  let preview = URL.createObjectURL(file);

  // If image file exists, return image
  return (
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-11-mobile is-4-desktop is-5-tablet">
          <ExifOrientationImg src={preview} alt={preview} className="thumb" />
        </div>
      </div>
    </div>
  );
};

export default Thumb;
