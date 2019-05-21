import v8n from "v8n";

/********** Image validation function **********/

const validateImage = param => {
  return new Promise((resolve, reject) => {
    // Check for an object
    const validation = v8n().object();

    // If value does not pass validation test
    if (!validation.test(param)) {
      // Set error message
      const error = "Oops, that's not an image.";

      //
      reject(error);
    }

    // If input value passaes validation, set ERROR state
    else {
      resolve();
    }
  });
};

export default validateImage;
