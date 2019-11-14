import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) =>
  ReactDOM.createPortal(<>{children}</>, document.body);

export default Modal;
