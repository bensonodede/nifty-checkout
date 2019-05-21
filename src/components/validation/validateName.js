import v8n from "v8n";

/********** Name validation function  **********/

const validateName = param => {
  return new Promise((resolve, reject) => {
    // Check for a string with at least one character
    const validation = v8n()
      .string()
      .minLength(1);

    if (!validation.test(param)) {
      const error = " ";
      reject(error);
    }

    // If input value passes validation, set ERROR state
    else {
      resolve();
    }
  });
};

export default validateName;
