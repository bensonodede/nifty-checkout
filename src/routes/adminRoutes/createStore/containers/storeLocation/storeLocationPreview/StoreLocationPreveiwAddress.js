import React from "react";
import { useFormikContext } from "formik";

const StoreLocationPreviewAddress = () => {
  // Destructure formik
  let {
    values: { storeLocationAddress },
  } = useFormikContext();

  return <h5 className="is-size-6">{storeLocationAddress}</h5>;
};

export default StoreLocationPreviewAddress;
