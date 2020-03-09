import React from "react";
import TextareaAutosize from "react-textarea-autosize";

// Import styling
import "./styles.scss";

const TextareaInput = ({
  setFieldValue,
  setFieldTouched,
  errors,
  validateField,
  name,
  value,
  placeholder,
  minRows,
  maxRows
}) => (
  <div className="textarea-input">
    <TextareaAutosize
      onKeyPress={e => {
        e.key === "Enter" && e.preventDefault();
      }}
      type="text"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      placeholder={placeholder}
      minRows={minRows}
      maxRows={maxRows}
      // If error, turn input shadow box red
      className={`textarea-input__entry ${
        errors[name] ? `textarea-input__entry--error` : ``
      }`}
      value={value}
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

export default TextareaInput;
