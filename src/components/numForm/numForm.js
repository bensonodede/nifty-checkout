import React, { Component } from "react";

import "./styles.css";

class NumForm extends Component {
  render() {
    return (
      <div className="num-form">
        {/* Input label */}
        <h1 className="num-input__label">PHONE NUMBER</h1>

        {/* Input container */}
        <div className="num-input">
          {/* Input country label */}
          <p className="num-input__country">+254</p>

          {/* Input phone number entry */}
          <input
            className="num-input__entry"
            placeholder="712345678"
            maxlength="9"
            type="tel"
            pattern="\d*"
          />
        </div>
      </div>
    );
  }
}

export default NumForm;
