import React from "react";

// Import styles
import "./styles.scss";

const GenericInput = ({
  setFieldValue,
  setFieldTouched,
  errors,
  validateField,
  name,
  value,
  placeholder
}) => (
  <div className="generic-input">
    {/* Text input */}
    <input
      name={name}
      type="text"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      placeholder={placeholder}
      // If error, turn input shadow box red
      className={` generic-input__entry ${
        errors[name] ? `generic-input__entry--error` : ``
      }`}
      value={value}
      onKeyPress={e => {
        e.key === "Enter" && e.preventDefault();
      }}
      onChange={async event => {
        // Get input value
        let val = event.target.value;

        // Set value to field
        await setFieldValue(name, val);

        // Set field to touched
        await setFieldTouched(name, true);

        // Run field validation
        validateField(name);
      }}
    />
  </div>
);

export default GenericInput;
