import v8n from "v8n";

const validateFileUrls = (param) => {
  // Check that every URL in array has at least one string character
  const validation = v8n().every.string().minLength(1);

  let error;

  // Run value through test
  if (!validation.test(param)) {
    error = "Upload at least 1 image";
  }

  return error;
};

export default validateFileUrls;
