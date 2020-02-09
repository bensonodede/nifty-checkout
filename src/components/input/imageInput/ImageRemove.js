import React from "react";

// Import Components
import { Icon } from "react-icons-kit";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import Thumb from "./Thumb";

// Import components
import Button from "components/button";

// Import styles
import "./styles.scss";

const ImageRemove = ({ name, setFieldValue, validateField, value }) => (
  <>
    <Button
      type={"button"}
      isOutline
      isSmall
      className="image-remove__btn"
      onClick={async () => {
        await setFieldValue(name, "");

        // Validate field
        validateField(name);
      }}
    >
      <span className="image-remove__icon">
        <Icon icon={ic_delete} size={"100%"} />
      </span>
      <span>Remove</span>
    </Button>

    {/* Thumbnail */}
    <Thumb file={value} />
  </>
);

export default ImageRemove;
