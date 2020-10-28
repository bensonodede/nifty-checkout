import React, { useState, useRef } from "react";

// Import components
import { Icon } from "react-icons-kit";
import { androidClose } from "react-icons-kit/ionicons/androidClose";

// Import styles
import "./styles.scss";

const TagInput = ({
  // Tag input props
  placeholder,

  // Formik props
  setFieldValue,
  setFieldTouched,
  validateField,
  value,
  name,
  errors,
}) => {
  const tagInputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [duplicateError, setDuplicateError] = useState(null);

  /********** Remove tag **********/

  const removeTag = async (i) => {
    // Spread values
    const newTags = [...value];

    // Remove last tag by index
    await newTags.splice(i, 1);

    // Reset duplicate error
    await setDuplicateError(null);

    // Set field value to new array with removed tag
    await setFieldValue(name, newTags);

    // Set field to touched
    await setFieldTouched(name, true);

    // Run field validation
    await validateField(name);

    // ? Dirty fix to sync formik-persist with formik state touched and errors
    validateField(name);
  };

  /********** Handle key input **********/

  const inputKeyDown = async (e) => {
    e.persist();

    // Get current input value
    const val = e.target.value;

    // Handle on enter key press
    if (e.key === "Enter" && val) {
      e.preventDefault();

      // Look for duplicate
      if (await value.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        // Set duplicate error message if duplicate is found
        await setDuplicateError(`You've already added "${val}"`);
        return;
      }

      // Reset duplicate error
      await setDuplicateError(null);

      // Append new value to array and set field value
      await setFieldValue(name, [...value, val]);

      // Set field to touched
      await setFieldTouched(name, true);

      // Run field validation
      await validateField(name);

      // ? Dirty fix to sync formik-persist with formik state touched and errors
      await validateField(name);

      // Reset input value
      e.target.value = "";
    }

    // Remove last tag on Backspace key press
    else if (e.key === "Backspace" && !val) {
      removeTag(value.length - 1);
    }
  };

  return (
    <>
      <div
        onClick={() => tagInputRef.current.focus()}
        className={
          "tag-input " +
          (isFocused ? "tag-input--focus " : "") +
          (errors[name] && !isFocused ? "tag-input--error" : "")
        }
      >
        <ul className="tag-input__tag-list">
          {value.map((tag, i) => (
            /* Tag list */
            <li key={tag} className="tag-input__tag-item">
              {/* Tag item */}
              {tag}

              {/* Tag remove button */}
              <div
                className="tag-input__tag-item__button"
                type="button"
                onClick={() => {
                  removeTag(i);
                }}
              >
                <Icon icon={androidClose} size={"100%"} />
              </div>
            </li>
          ))}

          {/* Tag input entry */}
          <li className="tag-input__entry-item">
            <input
              ref={tagInputRef}
              type="text"
              placeholder={placeholder}
              className={
                // Hide placeholder if a tag is added
                "tag-input__entry " +
                (value.length >= 1 ? "tag-input__entry--focus" : "")
              }
              onKeyDown={inputKeyDown}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
              onChange={(e) => {
                e.preventDefault();
                setDuplicateError(null);
              }}
            />
          </li>
        </ul>
      </div>

      {/* Render duplicate error */}
      {duplicateError && (
        <h5 className="tag-input__duplicate-error is-size-6 is-marginless">
          {duplicateError}
        </h5>
      )}
    </>
  );
};

export default TagInput;
