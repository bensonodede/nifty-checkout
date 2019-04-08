import React, { Component } from "react";

// Import styles
import "./styles.css";

class GenericInput extends Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
  }
  render() {
    let { setFieldValue, name, value, errors } = this.props;
    return (
      <div>
        <div className="generic-input">
          {/* Text input */}
          <input
            name="title"
            type="text"
            autoComplete="off"
            className={
              "generic-input__entry " +
              (errors.title ? "generic-input__entry--error" : null)
            }
            value={value}
            onChange={event => {
              let val = event.target.value;
              setFieldValue(name, val);
            }}
          />
        </div>
        <p className="input__error-message">{errors.title}</p>
      </div>
    );
  }
}

export default GenericInput;
