import v8n from "v8n";

const validatePhoneNumber = param => {
  // Check for a string with 11 characters (account for 2 spaces from text-mask)
  const validation = v8n()
    .string()
    .minLength(11);

  let error;

  // Run value through validation
  if (!validation.test(param)) {
    error = "Invalid phone number";
  }

  return error;
};

export default validatePhoneNumber;
