import React from "react";

// Import Components
import { Icon } from "react-icons-kit";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import Thumb from "./Thumb";

// Import styles
import "./styles.scss";

const ImageRemove = ({ resetForm, value }) => (
  <div className="image-remove">
    <button
      className="image-remove__btn button is-small is-primary is-outlined"
      onClick={async () => {
        await URL.revokeObjectURL(value);
        resetForm({ file: "" });
      }}
    >
      {/* Remove image icon */}
      <span className="image-remove__icon">
        <Icon icon={ic_delete} size={"100%"} />
      </span>

      {/* Remove image text */}
      <span>Remove</span>
    </button>

    <Thumb file={value} />
  </div>
);

export default ImageRemove;
