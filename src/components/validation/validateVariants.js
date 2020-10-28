import v8n from "v8n";

const validateVariants = (param) => {
  // Check that every item is a string and atleast one element is present
  const validation = v8n().every.string().minLength(1);

  let error;

  // Run value through test
  if (!validation.test(param)) {
    error = "Add at least one option";
  }

  return error;
};

export default validateVariants;
