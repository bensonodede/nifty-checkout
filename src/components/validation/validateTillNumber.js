import v8n from "v8n";

const validateTillNumber = param => {
  // Check for a string with 7 characters (account for 1 space from input-mask)
  const validation = v8n()
    .string()
    .minLength(7);

  let error;

  // Run value through validation
  if (!validation.test(param)) {
    error = "Invalid till number";
  }

  return error;
};

export default validateTillNumber;
