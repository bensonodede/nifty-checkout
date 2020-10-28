import React from "react";
import Select from "react-select";

// Import styles
import "./styles.scss";

const SelectInput = ({
  options,
  defaultValue,
  onSelectChange,
  setFieldValue,
  setFieldTouched,
  validateField,
  name,
}) => (
  <>
    <Select
      className="select-input-container"
      classNamePrefix="select-input"
      options={options}
      defaultValue={defaultValue}
      onChange={async (option) => {
        // Get selected option value
        let { value } = option;

        // Set value to field
        await setFieldValue(name, value);

        // Set field to touched
        await setFieldTouched(name, true);

        // Run field validation
        await validateField(name);

        // ? Dirty fix to sync formik-persist with formik state touched and errors
        validateField(name);

        //
        if (onSelectChange) {
          onSelectChange();
        }
      }}
    />
  </>
);

export default SelectInput;
