import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { ic_cloud_upload } from "react-icons-kit/md/ic_cloud_upload";

// Import styles
import "./styles.scss";

const ImageUpload = ({
  name,
  validateField,
  setFieldValue,
  setFieldTouched
}) => (
  <div className="container">
    <div className="columns is-multiline">
      <div className="column is-11-mobile is-4-desktop is-5-tablet">
        {/* Image input background */}
        <div className="image-input__placeholder">
          <div className="image-input__placeholder-background">
            {/* Image input upload button */}
            <label
              className="image-input__button button is-primary is-small"
              htmlFor="file"
            >
              <span className="image-input__upload-icon">
                <Icon icon={ic_cloud_upload} size={"100%"} />
              </span>
              <span>Upload photo</span>
            </label>
            {/* End Image input upload button */}
          </div>
        </div>

        {/* Image file input */}
        <input
          id="file"
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
      </div>
    </div>
  </div>
);

export default ImageUpload;
