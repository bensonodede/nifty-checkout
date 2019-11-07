import v8n from "v8n";

/********** Image validation function **********/

const validateImage = value => {
  // Check for an object
  const validation = v8n().object();

  let error;

  // If value does not pass validation test
  if (!validation.test(value)) {
    // Set error message
    error = "Oops, that's not an image.";
  }

  return error;
};

export default validateImage;
