import React from "react";
import { Field } from "formik";

// Import components
import Accordion from "components/accordion";
import { TextareaInput } from "components/input";
import { validateName } from "components/validation";
import { Icon } from "react-icons-kit";
import { helpCircled } from "react-icons-kit/ionicons/helpCircled";
import PolicyAccordionHeader from "./PolicyAccordionHeader";
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
    <div className="policy-field">
      {policyData.map(item => (
        <Accordion
          key={item.id}
          header={
            <PolicyAccordionHeader emoji={item.emoji} title={item.title} />
          }
        >
          {/* Delivery policy question */}
          <div className="create-store-field">
            <div className="policy-field__description ">
              <div className="policy-field__help-icon">
                <Icon icon={helpCircled} size={"100%"} />
              </div>
              <h5 className="is-marginless">{item.description}</h5>
            </div>

            {/* Delivery policy field */}
            <Field
              name={item.field}
              validate={validateName}
              component={PolicyInput}
            />
          </div>
        </Accordion>
      ))}
    </div>

    {/* Policy footer */}
    <CreateStoreFooter isDisabled={!isValid} type={"submit"} onClick={null} />
  </>
);

export default PolicyField;
