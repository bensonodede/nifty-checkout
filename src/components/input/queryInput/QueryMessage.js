import React from "react";

const QueryMessage = ({
  value,
  isLoading,
  isExist,
  isQueryError,
  isInitial
}) => (
  <>
    {!!value && !isLoading && !isQueryError && !isInitial && (
      <h5 className="query-message is-marginless is-size-6">
        {isExist ? (
          <span className="query-message-text--error">
            username is already taken
          </span>
        ) : (
          <span className="query-message-text">username is available</span>
        )}
      </h5>
    )}
  </>
);

export default QueryMessage;
