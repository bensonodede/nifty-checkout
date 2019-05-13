import React from "react";

import "../../overlay/bottom-modal.css";

const Modal = props => {
  let back = e => {
    e.stopPropagation();
    props.history.goBack();
  };

  return (
    <div className="bottom-modal" onClick={back}>
      {/* Modal card */}
      {/* <div className="bottom-modal__card">{this.props.children}</div> */}
      <h1>MODAL TEST</h1>
      {/* Modal card End */}
    </div>
  );
};

export default Modal;
