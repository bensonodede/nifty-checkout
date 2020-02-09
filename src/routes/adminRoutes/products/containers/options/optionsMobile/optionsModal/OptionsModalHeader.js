import React from "react";

const OptionsModalHeader = ({ imgUrl, name }) => (
  <div className="options-modal__header">
    {/* Options image preview */}
    <div className={"options-modal__img-container"}>
      <img src={imgUrl} alt={name} className={"options-modal__img"} />
    </div>

    {/* Options modal content */}
    <h5 className="options-modal__content is-size-6">{name}</h5>
  </div>
);

export default OptionsModalHeader;
