import React, { useState } from "react";
import MaskedInput from "react-text-mask";

// Import styles
import "./styles.scss";

const LabelInput = ({
  mask,
  label,
  placeholder,
  name,
  value,
  setFieldValue,
  setFieldTouched,
  errors,
  validateField,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div
        className={
          "label-input" +
          (isFocused ? " label-input--focus" : "") +
          (errors[name] && !isFocused ? " label-input--error" : "")
        }
      >
        <h3 className="label-input__inline-label">{label}</h3>

        {/* Masked input entry */}
        <MaskedInput
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChange={async (event) => {
            // Get input value
            let val = event.target.value;

            // Set value to field
            await setFieldValue(name, val);

            // Set field to touched
            await setFieldTouched(name, true);

            // Run field validation
            await validateField(name);

            // ? Dirty fix to sync formik-persist with formik state touched and errors
            validateField(name);
          }}
          value={value}
          placeholder={placeholder}
          className="label-input__entry"
          mask={mask}
          guide={false}
        />
      </div>
    </>
  );
};

export default LabelInput;
