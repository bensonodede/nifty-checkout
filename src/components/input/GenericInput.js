import React from "react";

// Import styles
import "./styles.css";

const GenericInput = ({ form, field, placeholder }) => {
  // Destructure props
  let { name, value } = field;
  let { setFieldValue, setFieldTouched, errors, validateField } = form;

  return (
    <>
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
          onChange={async event => {
            let val = event.target.value;
            await setFieldValue(name, val);
            await setFieldTouched(name, true);
            validateField(name);
          }}
        />
      </div>

      {/* Render field error on validation */}
      {/* <p className="input__error-message">{errors[name]}</p> */}
    </>
  );
};

export default GenericInput;
