const handleReset = async (values, actions, history, storeUsername) => {
  // Set form submitting state to false
  await actions.setSubmitting(false);

  // Remove formik persist
  await localStorage.removeItem("add-product-form");

  // Remove scroll height from session storage
  await sessionStorage.removeItem(`add-product-form-scroll-height`);

  // Redirect to product page
  await history.push(`/${storeUsername}/admin/products`);
};

export default handleReset;
