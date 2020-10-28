// Import functions
import formatProductValues from "./formatProductValues";

const handleSubmit = (
  values,
  actions,
  mutate,
  storeUsername,
  initialValues
) => {
  // Format values
  let formattedValues = formatProductValues(values);

  // Run create product mutation
  mutate({
    variables: {
      ...formattedValues,
      storeUsername,
    },
  }).then(() => {
    // Reset formik values after toast animation plays
    setTimeout(() => {
      actions.resetForm(initialValues);
    }, 1500);
  });
};

export default handleSubmit;
