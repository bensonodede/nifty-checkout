import {
  StoreNameInput,
  StoreUsernameInput,
  PhoneNumberInput,
  PolicyReturnsInput,
  PolicyDeliveryInput,
} from "./StoreFormInputs";

import { validateName, validatePhoneNumber } from "components/validation";

const StoreFormData = [
  {
    id: 0,
    label: "STORE NAME",
    name: "storeName",
    input: StoreNameInput,
    validate: validateName,
  },

  {
    id: 1,
    label: "STORE USERNAME",
    name: "storeUsername",
    input: StoreUsernameInput,
    validate: validateName,
  },

  {
    id: 2,
    label: "PHONE NUMBER",
    name: "phoneNumber",
    input: PhoneNumberInput,
    validate: validatePhoneNumber,
  },

  {
    id: 3,
    label: "REFUNDS AND RETURNS POLICY",
    name: "policyReturns",
    input: PolicyReturnsInput,
    validate: validateName,
  },

  {
    id: 4,
    label: "DELIVERY/PICKUP POLICY",
    name: "policyDelivery",
    input: PolicyDeliveryInput,
    validate: validateName,
  },
];

export default StoreFormData;
