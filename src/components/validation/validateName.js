import v8n from "v8n";

const validateName = (param) => {
  // Check for a string with at least one character
  const validation = v8n().string().minLength(1);

  let error;

  // Run value through test
  if (!validation.test(param)) {
    error = "Enter at least 1 character";
  }

  return error;
};

export default validateName;
