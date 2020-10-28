// Import components
import numeral from "numeral";

const formatInitialValues = ({
  name,
  price,
  quantity,
  imgUrls,
  description,
  options,
  variants,
}) => {
  // Define global variables
  let optionsInit;
  let variantsInit;

  // If options are present
  if (options[0]) {
    optionsInit = options;
    variantsInit = variants;

    // Delete typename and ID key from each option object
    optionsInit.forEach((option) => {
      delete option["__typename"];
      delete option["id"];
    });

    // Delete typename and ID key from each variant object
    variantsInit.forEach((variant) => {
      delete variant["__typename"];
      delete variant["id"];

      // Format price to string
      variant["price"] = numeral(variant.price).format("0,0");

      // Format quantity to string
      variant["quantity"] = numeral(variant.quantity).format("0,0");
    });
  } else {
    // Assign default initial options value
    optionsInit = [{ title: "Size", tags: [] }];

    // Assign default initial options value
    variantsInit = [];
  }

  // Format price to string
  price = numeral(price).format("0,0");

  // Format quantity to string
  quantity = numeral(quantity).format("0,0");

  let initialValues = {
    name,
    price,
    quantity,
    imgUrls,
    description,
    options: optionsInit,
    variants: variantsInit,
    isFilesUploaded: true,
  };

  return initialValues;
};

export default formatInitialValues;
