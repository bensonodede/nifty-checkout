import React, { useRef } from "react";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { ic_cloud_upload } from "react-icons-kit/md/ic_cloud_upload";

// Import styles
import "./styles.scss";

const ImageUpload = ({
  name,
  validateField,
  setFieldValue,
  setFieldTouched
}) => {
  // Create input ref
  const inputRef = useRef(null);

  return (
    <>
      {/* Image input background */}
      <div className="image-input__placeholder">
        <div className="image-input__placeholder-background">
          {/* Image input upload button */}
          <Button
            onClick={() => inputRef.current.click()}
            className="image-input__button"
            type={"button"}
            isOutline
          >
            <span className="image-input__upload-icon">
              <Icon icon={ic_cloud_upload} size={"100%"} />
            </span>
            <span>Upload photo</span>
          </Button>
          {/* End Image input upload button */}
        </div>
      </div>

      {/* Image file input */}
      <input
        ref={inputRef}
        name={name}
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        className="image-input"
        onChange={async event => {
          let [file] = await event.currentTarget.files;

          // Set image file to field
          await setFieldValue("file", file);

          // Set field to touched
          await setFieldTouched(name, true);

          // Validate field
          validateField(name);
        }}
      />
    </>
  );
};

export default ImageUpload;
