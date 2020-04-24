import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import { withApollo } from "@apollo/react-hoc";

// Import components
import { Loader } from "components/loader";
import QueryMessage from "./QueryMessage";
import { ErrorToast } from "components/toast";

// Import styles
import "./styles.scss";

const QueryInput = ({
  // Apollo props
  client: apolloClient,

  // Pass in these props
  query,
  queryVariable,
  queryResultName,
  queryErrorMessage,
  mask,
  placeholder,

  // Formik props
  name,
  value,
  initialValues,
  setFieldValue,
  setFieldTouched,
  setFieldError,
  errors,
  validateField,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isExist, setIsExist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isQueryError, setisQueryError] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  return (
    <>
      <div
        className={
          "label-input " +
          (isFocused ? "label-input--focus " : "") +
          (errors[name] && !isFocused ? "label-input--error" : "")
        }
      >
        <MaskedInput
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChange={async (event) => {
            // Get input value
            let val = event.target.value;

            // Set value to field
            await setFieldValue(name, val);

            // Set field to touched
            await setFieldTouched(name, true);

            // Set loading state
            await setIsLoading(true);
            await setFieldError(name, "Loading");

            // If input matches initial value
            if (initialValues[name] === val) {
              await setIsInitial(true);
            } else {
              await setIsInitial(false);
            }

            // Run query
            let { data, errors } = await apolloClient.query({
              query,
              variables: { [queryVariable]: val },
              errorPolicy: "all",
            });

            // Set query error state
            if (errors) {
              await setisQueryError(true);
              await setFieldError(name, "No internet connection");
            }

            if (data) {
              // Set query data result to state
              await setIsExist(data[queryResultName]);

              // Reset error field
              await setFieldError(name);

              // If value exists and does not match initial value, set error
              if (data[queryResultName] && !(initialValues[name] === val)) {
                await setFieldError(name, "username is already taken");
              }

              // Run field validation
              else {
                await validateField(name);
              }
            }

            // Set query loading state
            setIsLoading(false);
          }}
          value={value}
          placeholder={placeholder}
          className="label-input__entry"
          mask={mask}
          guide={false}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />

        {/* Query input loader */}
        {isLoading && (
          <div className="query-input__loader">
            <Loader />
          </div>
        )}
      </div>

      {/* Query input message */}
      <QueryMessage
        value={value}
        isLoading={isLoading}
        isExist={isExist}
        isQueryError={isQueryError}
        isInitial={isInitial}
      />

      {/* Return error toast if no internet connection */}
      {isQueryError && (
        <ErrorToast emoji={"💩"} text={"No internet connection"} />
      )}
    </>
  );
};

export default withApollo(QueryInput);
