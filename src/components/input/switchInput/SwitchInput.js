import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";

// Import styles
import "./styles.scss";

const SwitchInput = ({
  label,
  name,
  value,
  setFieldValue,
  setFieldTouched,
}) => {
  return (
    <>
      <div className="switch-input-row">
        {/* Switch input label */}
        <p className="is-marginless is-size-6 has-text-grey">{label}</p>

        {/* Switch input wrapper */}
        <div className="switch-input-wrapper">
          {/* Checkbox input */}
          <input
            checked={value}
            onChange={async (event) => {
              // Toggle field value
              await setFieldValue(name, !value);

              // Set field to touched
              await setFieldTouched(name, true);
            }}
            className="switch-input-checkbox"
            id={`switch-input-new`}
            type="checkbox"
          />

          {/* Switch input label */}
          <label
            className={
              "switch-input-label" +
              (value ? " switch-input-label--active" : "")
            }
            htmlFor={`switch-input-new`}
          >
            <span className={`switch-input-button`}>
              {value && (
                <Icon
                  icon={checkmark}
                  size={"100%"}
                  className={"switch-input-check-icon"}
                />
              )}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default SwitchInput;
