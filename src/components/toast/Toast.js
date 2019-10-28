import React from "react";

// Import styles
import "./styles.scss";

const Toast = props => (
  <div className="toast">
    <div className="container">
      <div className="columns is-mobile">
        <div className="column is-10">
          {/* Toast content */}
          {props.content}
        </div>
      </div>
    </div>
  </div>
);

export default Toast;
