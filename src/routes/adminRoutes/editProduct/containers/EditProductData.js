import {
  EditNameInput,
  EditPriceInput,
  EditDescriptionInput
} from "./EditProductInputs";
import { validateName } from "components/validation";

const EditProductData = [
  {
    id: 1,
    label: "PRODUCT NAME",
    name: "name",
    input: EditNameInput,
    validate: validateName
  },
  {
    id: 2,
    label: "PRICE",
    name: "price",
    input: EditPriceInput,
    validate: validateName
  },
  {
    id: 3,
    label: "PRODUCT DESCRIPTION",
    name: "description",
    input: EditDescriptionInput,
    validate: validateName
  }
];

export default EditProductData;
