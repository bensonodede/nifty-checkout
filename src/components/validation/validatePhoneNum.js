import v8n from "v8n";

/********** Name validation function  **********/

const validatePhoneNum = param => {
  return new Promise((resolve, reject) => {
    // Check for a string with 11 characters (account for 2 spaces from text-mask)
    const validation = v8n()
      .string()
      .minLength(11);

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

export default validatePhoneNum;
