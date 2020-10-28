import React, { useState } from "react";

// Import components
import AutosizeInput from "react-input-autosize";
import { Icon } from "react-icons-kit";
import { minus } from "react-icons-kit/ionicons/minus";
import { plus } from "react-icons-kit/ionicons/plus";

// Import functions
import { decrement, increment } from "./counter";

// Import styles
import "./styles.scss";

const CounterInput = ({
  // Counter input props
  placeholder,
  allowNegative,

  // Formik props
  name,
  label,
  value,
  setFieldValue,
  setFieldTouched,
  errors,
  validateField,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="counter-input__wrapper">
      {/* Label */}
      <p className="is-size-6 has-text-grey is-marginless">{label}</p>

      {/* Decrement button */}
      <div className="counter-input">
        <button
          className={"counter-button"}
          type={"button"}
          onClick={() => {
            decrement(
              allowNegative,
              value,
              name,
              setFieldValue,
              setFieldTouched,
              validateField
            );
          }}
        >
          <Icon className={"counter-icon"} icon={minus} size={"100%"} />
        </button>

        {/* Automatic size input */}
        <AutosizeInput
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
          maxLength={6}
          placeholderIsMinWidth={true}
          inputClassName={
            "counter-input__entry" +
            (isFocused ? " counter-input__entry--focus" : "") +
            (errors[name] && !isFocused ? " counter-input__entry--error" : "")
          }
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />

        {/* Increment button */}
        <button
          className={"counter-button"}
          type={"button"}
          onClick={() => {
            increment(
              value,
              name,
              setFieldValue,
              setFieldTouched,
              validateField
            );
          }}
        >
          <Icon className={"counter-icon"} icon={plus} size={"100%"} />
        </button>
      </div>
    </div>
  );
};

export default CounterInput;
