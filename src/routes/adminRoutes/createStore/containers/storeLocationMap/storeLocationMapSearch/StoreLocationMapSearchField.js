import React from "react";
import { Field } from "formik";

// Import components
import { SearchInput } from "components/input";

const StoreLocationMapSearchField = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <>
      {/* Search field row */}
      <div className="delivery-search__field-row">
        {/* Search field */}
        <Field name="storeLocationAddress" validate={null}>
          {({ field, form }) => (
            <div
              onClick={() => setIsSearchOpen(true)}
              className={`delivery-search__field ${
                isSearchOpen ? "delivery-search__field--open" : ""
              }`}
            >
              {/* Search input */}
              <SearchInput
                {...field}
                {...form}
                placeholder={"Where is your store?"}
                inputClassName={`${
                  isSearchOpen ? "" : "delivery-search__input"
                }`}
              />
            </div>
          )}
        </Field>

        {/* Search cancel button */}
        {isSearchOpen && (
          <h5
            onClick={() => setIsSearchOpen(false)}
            className="is-size-6 delivery-search__field-cancel"
          >
            Cancel
          </h5>
        )}
      </div>
    </>
  );
};
export default StoreLocationMapSearchField;
