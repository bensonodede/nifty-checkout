import React from "react";
import { Field } from "formik";

// Import components
import { TextareaInput } from "components/input";
import { validateName } from "components/validation";
import { Icon } from "react-icons-kit";
import { helpCircled } from "react-icons-kit/ionicons/helpCircled";
import PolicyFieldHeader from "./PolicyFieldHeader";
import CreateStoreFooter from "../CreateStoreFooter";

// Import policy data
import policyData from "./policy.json";

// Policy input component
const PolicyInput = ({ field, form }) => (
  <TextareaInput
    {...field}
    {...form}
    minRows={5}
    maxRows={10}
    placeholder={"Enter text here..."}
  />
);

const PolicyField = ({ isValid }) => (
  <>
    {policyData.map(item => (
      <div key={item.id} className="policy-field">
        {/* Policy field header */}
        <PolicyFieldHeader emoji={item.emoji} title={item.title} />

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
          component={PolicyInput}
        />
      </div>
    ))}

    {/* Policy footer */}
    <CreateStoreFooter isDisabled={!isValid} type={"submit"} onClick={null} />
  </>
);

export default PolicyField;
