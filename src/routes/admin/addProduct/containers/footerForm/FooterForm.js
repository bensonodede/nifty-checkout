import React from "react";

// Import styles
import "./styles.scss";

const FooterForm = ({ valid, loading, onPress, btnText, btnType }) => {
  return (
    <div className="footer-form">
      <div className="column is-10-mobile is-10-tablet has-text-right">
        <button
          type={btnType}
          onClick={onPress}
          disabled={!valid}
          className={`${valid && `disabled`}
          ${loading && `is-loading`}
          button has-background-grey-darker has-text-white
          `}
        >
          <span>{btnText}</span>
        </button>
      </div>
    </div>
  );
};

export default FooterForm;
