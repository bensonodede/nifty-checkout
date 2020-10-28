import React from "react";
import { Field } from "formik";
import { useHistory } from "react-router-dom";

// Import components
import { LabelInput } from "components/input";
import { PriceMask } from "components/inputMask";
import { validateName } from "components/validation";
import { Icon } from "react-icons-kit";
import { helpCircled } from "react-icons-kit/ionicons/helpCircled";
import DeliveryPriceFieldHeader from "./DeliveryPriceFieldHeader";
import CreateStoreFooter from "../CreateStoreFooter";

// Import policy data
import deliveryPreviewData from "./deliveryPrice.json";

// Policy input component
const DeliveryInput = ({ field, form }) => (
  <LabelInput
    {...field}
    {...form}
    mask={PriceMask}
    placeholder={"00"}
    label={"KSH"}
  />
);

const DeliveryPriceField = ({ isValid }) => {
  // Get history
  let history = useHistory();

  return (
    <>
      {deliveryPreviewData.map((item) => (
        <div key={item.id} className="policy-field">
          {/*  field header */}
          <DeliveryPriceFieldHeader emoji={item.emoji} title={item.title} />

          {/* Policy field question */}
          <div className="policy-field__description ">
            <div className="policy-field__help-icon">
              <Icon icon={helpCircled} size={"100%"} />
            </div>
            <h5 className="is-marginless">{item.description}</h5>
          </div>

          {/* Policy field input*/}
          <Field
            name={item.field}
            validate={validateName}
            component={DeliveryInput}
          />
        </div>
      ))}

      {/* Policy footer */}
      <CreateStoreFooter
        isDisabled={!isValid}
        type={"button"}
        onClick={() => history.push("/create-store/policy")}
      />
    </>
  );
};

export default DeliveryPriceField;
