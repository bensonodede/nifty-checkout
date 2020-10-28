import { useEffect } from "react";
import { useFormikContext } from "formik";

const FormikPersist = ({ name, isSessionStorage }) => {
  // Define formik props
  let formikProps = useFormikContext();

  // Destructure formik props
  // prettier-ignore
  let {setFormikState, dirty, values, errors, touched, isValid, isSubmitting } = formikProps;

  // On component mounted
  useEffect(() => {
    const restoreFormikState = async () => {
      // Get formik state
      const savedState = isSessionStorage
        ? await JSON.parse(sessionStorage.getItem(name))
        : await JSON.parse(localStorage.getItem(name));

      // Restore formik state
      if (savedState) {
        await setFormikState(savedState);
      }
    };

    restoreFormikState();
  }, []);

  // On values change
  useEffect(() => {
    // Save formik state to session or local storage
    isSessionStorage
      ? sessionStorage.setItem(name, JSON.stringify(formikProps))
      : localStorage.setItem(name, JSON.stringify(formikProps));
  }, [dirty, values, errors, touched, isValid, isSubmitting]);

  // Render null
  return null;
};

export default FormikPersist;
