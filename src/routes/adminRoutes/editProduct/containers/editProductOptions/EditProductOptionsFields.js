import React from "react";
import { FieldArray, Field } from "formik";

// Import components
import {
  EditProductOptionsTitleInput,
  EditProductOptionsVariantsInput,
} from "./EditProductOptionsInput";
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/ionicons/plus";

// ! Field array validation is buggy
// import { validateName, validateVariants } from "components/validation";

// Import styles
import "./styles.scss";

const EditProductOptionsFields = ({
  history,
  location,
  storeUsername,
  productId,
  values,
}) => {
  // Different placeholders to serve as examples
  let placeholders = ["Size", "Color", "Material"];

  return (
    <>
      <FieldArray
        name="options"
        render={({ remove, push }) => (
          <div className="add-product-options-field__list">
            {values.options.map((option, index) => (
              <div
                className="add-product-options-field__section"
                key={`key-${index}`}
              >
                {/* Remove field button*/}
                {values.options.length > 1 && (
                  <div className="add-product-options-field__remove">
                    <h5
                      className="is-marginless has-text-right is-size-6 add-product-options-field__remove-text"
                      onClick={() => {
                        // Remove field by index
                        remove(index);
                      }}
                    >
                      Remove
                    </h5>
                  </div>
                )}

                {/* Options Title field */}
                <div className="add-product-options-field">
                  <h5 className="add-product-options-field__label title is-size-7">
                    OPTION {index + 1}
                  </h5>
                  <Field
                    placeholder={placeholders[index]}
                    name={`options.${index}.title`}
                    validate={null}
                    component={EditProductOptionsTitleInput}
                  />
                </div>

                {/* Options Tag field */}
                <div className="add-product-options-field">
                  <h5 className="add-product-options-field__label title is-size-7">
                    VALUES FOR OPTION {index + 1}
                  </h5>
                  <Field
                    name={`options.${index}.tags`}
                    validate={null}
                    component={EditProductOptionsVariantsInput}
                  />
                </div>
              </div>
            ))}

            <div className="add-product-options-field__footer">
              {/* Display add new button if fields are less than 3 */}
              {values.options.length < 3 && (
                <Button
                  className="add-product-options-field__footer-btn"
                  isOutline
                  isFullWidth
                  type="button"
                  onClick={() => {
                    // Add new field
                    push({
                      title: `${placeholders[values.options.length]}`,
                      tags: [],
                    });
                  }}
                >
                  <div className="add-product-options-field__footer-btn-icon-wrapper">
                    <Icon
                      icon={plus}
                      size={"100%"}
                      className="add-product-options-field__footer-btn-icon"
                    />
                  </div>
                  Add a new option
                </Button>
              )}

              {/* Redirect to add product page */}
              <Button
                isFullWidth
                type="button"
                onClick={() => {
                  history.push(
                    `/${storeUsername}/admin/products/edit/${productId}`
                  );
                }}
                className="add-product-options-field__footer-btn"
              >
                Save
              </Button>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default EditProductOptionsFields;
