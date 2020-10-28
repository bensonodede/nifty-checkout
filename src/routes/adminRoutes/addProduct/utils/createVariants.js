/**********  **********/
const flatten = (arr) => [].concat.apply([], arr);

/**********  **********/
const product = (...sets) =>
  sets.reduce(
    (acc, set) => flatten(acc.map((x) => set.map((y) => [...x, y]))),
    [[]]
  );

/********** CREATE VARIANTS FUNCTION **********/

const createVariants = (values) => {
  // Extract tags array from each option and add extracted array to parent array => [[...], [...], []]
  let variantTags = values.options.map((option) => option.tags);

  // Remove any empty child arrays from parent array => [[...], [...]]
  variantTags = variantTags.filter((e) => e.length);

  if (variantTags.length === 0) {
    /*** If parent array contains no child arrays => [] ***/
    // Return empty array
    return [];
  } else if (variantTags.length === 1) {
    /*** If parent array contains only one array => [[...]]***/

    // Create variant objs from first array index only, map obj into array
    let variants = variantTags[0].map((tag) => {
      return {
        label: tag,
        combinations: [tag],
        price: values.price,
        quantity: values.quantity,
        publish: true,
      };
    });

    // Return variant array with variant objs => [{...}, {...}]
    return variants;
  } else {
    /*** If parent array contains more than one array => [[...], [...], ... ]***/

    // Get all possible combination arrays
    let productResult = product(...variantTags);

    // Create variant object for each array item
    let variants = productResult.map((tag) => {
      return {
        // Join combination strings to create arrays
        label: tag.join(" × "),
        combinations: tag,
        price: values.price,
        quantity: values.quantity,
        publish: true,
      };
    });

    return variants;
  }
};

export default createVariants;
