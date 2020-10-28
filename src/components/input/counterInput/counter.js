import numeral from "numeral";

// Check if string is empty and format to 0 if empty
const checkValue = (value) => {
  if (value === "" || null) {
    value = "0";
    return value;
  }

  return value;
};

/********** Decrement value **********/

const decrement = async (
  allowNegative,
  value,
  name,
  setFieldValue,
  setFieldTouched,
  validateField
) => {
  // Verify value
  let verifiedValue = await checkValue(value);

  let newValue;

  // If negative values allowed => Decrement value
  if (allowNegative) {
    newValue = await numeral(verifiedValue).subtract(1).format("'0,0'");
  } else {
    // If value is more than 0 => Decrement value
    if (numeral(verifiedValue).value() > 0) {
      newValue = await numeral(verifiedValue).subtract(1).format("'0,0'");
    }

    // If value is 0 => Do NOT Decrement value, return as is
    else {
      newValue = verifiedValue;
    }
  }

  // Set new field value
  await setFieldValue(name, newValue);

  // Set field to touched
  await setFieldTouched(name, true);

  // Run field validation
  validateField(name);
};

/********** Increment value **********/

const increment = async (
  value,
  name,
  setFieldValue,
  setFieldTouched,
  validateField
) => {
  // Verify value
  const verifiedValue = await checkValue(value);

  // Decrement value
  const newValue = await numeral(verifiedValue).add(1).format("'0,0'");

  // Set new field value
  await setFieldValue(name, newValue);

  // Set field to touched
  await setFieldTouched(name, true);

  // Run field validation
  validateField(name);
};

export { checkValue, decrement, increment };
