import React, { Component } from "react";

// Import styles
import "./styles.css";

class GenericInput extends Component {
  render() {
    // Define props
    let { setFieldValue, name, value, errors, validateField } = this.props;

    return (
      <div>
        <div className="generic-input">
          {/* Text input */}
          <input
            name={name}
            type="text"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            // If error, turn input shadow box red
            className={
              "generic-input__entry " +
              (errors[name] ? "generic-input__entry--error" : null)
            }
            value={value}
            onChange={async event => {
              let val = event.target.value;
              await setFieldValue(name, val);
              validateField(name);
            }}
          />
        </div>
        {/* Render field error on validation */}
        <p className="input__error-message">{errors[name]}</p>
      </div>
    );
  }
}

export default GenericInput;
