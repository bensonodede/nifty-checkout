const clearWindowStorage = (event, productId) => {
  event.preventDefault();

  // Remove persisted items
  sessionStorage.removeItem(`edit-product-form-${productId}`);
  sessionStorage.removeItem(`edit-product-form-scroll-height`);
};

export default clearWindowStorage;
