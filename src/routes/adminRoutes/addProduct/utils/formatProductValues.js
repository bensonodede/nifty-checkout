import numeral from "numeral";
const formatProductValues = (product) => {
  // Destructure product
  let { price, quantity, options, variants } = product;

  // Define new product object
  let newProduct = Object.assign({}, product);

  // Format price from string to number
  newProduct["price"] = numeral(price).value();

  // Delete isFilesUploaded key value pair
  delete newProduct["isFilesUploaded"];

  // If qauntity is present
  if (quantity) {
    //   Format quantity from string to number
    newProduct["quantity"] = numeral(quantity).value();
  } else {
    // Assign default quantity of 1
    newProduct["quantity"] = 1;
  }

  // Remove options with empty tags array
  newProduct["options"] = options.filter((option) => option.tags.length);

  // If variants are present
  if (variants[0]) {
    // Format price and quantity
    let newVariants = variants.map((variant) => {
      // Create new variant object
      let newVariant = Object.assign({}, variant);

      // If price is present
      if (newVariant.price) {
        // Format string to number
        newVariant["price"] = numeral(variant.price).value();
      } else {
        // Assign product price to variant price
        newVariant["price"] = numeral(price).value();
      }

      // If quantity is present
      if (newVariant.quantity) {
        // Format string to number
        newVariant["quantity"] = numeral(variant.quantity).value();
      } else {
        // Assign default quantity of 1
        newVariant["quantity"] = 1;
      }

      return newVariant;
    });

    // Assign new variants to product object
    newProduct["variants"] = newVariants;
  }

  return newProduct;
};

export default formatProductValues;
