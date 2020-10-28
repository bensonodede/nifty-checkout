import React, { useEffect } from "react";
import { forceCheck } from "react-lazyload";

// Import components
import { ImgLoader } from "components/loader";

const OptionsModalHeader = ({ imgUrl, name }) => {
  // Load images on mount
  useEffect(() => {
    setTimeout(() => {
      forceCheck();
    }, 500);
  }, []);

  return (
    <div className="options-modal__header">
      {/* Options image preview */}
      <div className={"options-modal__img-container"}>
        <ImgLoader
          transform={"c_thumb,g_center,r_8,w_48,h_48"}
          src={imgUrl}
          alt={name}
          className={"options-modal__img"}
        />
      </div>

      {/* Options modal content */}
      <h5 className="options-modal__content is-size-6">{name}</h5>
    </div>
  );
};

export default OptionsModalHeader;
