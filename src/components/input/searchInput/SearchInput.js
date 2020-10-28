import React, { useState, useRef } from "react";

// Import components
import { Icon } from "react-icons-kit";
import { androidSearch } from "react-icons-kit/ionicons/androidSearch";
import { androidClose } from "react-icons-kit/ionicons/androidClose";

// Import styles
import "./styles.scss";

const SearchInput = ({
  placeholder,
  name,
  value,
  setFieldValue,
  setFieldTouched,
  validateField,
  inputClassName = "",
}) => {
  // Input focused state
  const [focused, setFocused] = useState(false);
  // Input ref
  const searchInputRef = useRef(false);

  return (
    <>
      <div
        className={
          "search-input " +
          (focused ? "search-input--focus " : "") +
          inputClassName
        }
      >
        {/* Search icon */}
        <Icon
          icon={androidSearch}
          size={"100%"}
          className={"search-input__search-icon"}
        />

        {/* Search input */}
        <input
          ref={searchInputRef}
          name={name}
          type="text"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          placeholder={placeholder}
          // If error, turn input shadow box red
          className={"search-input__entry"}
          value={value}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          onFocus={(e) => {
            // Select all text
            e.target.select();

            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
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
        />

        {/* Search clear button */}
        {value !== "" && (
          <div
            onClick={() => {
              // Set field value to empty
              setFieldValue(name, "");
              // Focus search input
              searchInputRef.current.focus();
            }}
          >
            <Icon
              icon={androidClose}
              size={"100%"}
              className={"search-input__clear-icon"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
