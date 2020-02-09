import v8n from "v8n";

const validateImage = value => {
  // Check if image is URL string
  const urlValidation = v8n()
    .string()
    .minLength(1);

  // Check if image is object
  const objectValidation = v8n().object();

  let error;

  // If value is invalid
  if (
    !v8n()
      .passesAnyOf(urlValidation, objectValidation)
      .test(value)
  ) {
    // Set error message
    error = "Oops, that's not an image.";
  }

  return error;
};

export default validateImage;
