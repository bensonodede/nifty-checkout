import React, { Component } from "react";
import { Field } from "formik";
import { Link } from "react-router-dom";

//
import GenericInput from "../input/GenericInput";

//
import "../../styles/index.css";

class StoreName extends Component {
  //
  render() {
    let { values, isValid, validateField } = this.props;
    // console.log(this.props);

    return (
      <div>
        <div className="App-container">
          {/*  */}
          <div className="header">
            <h1 className="header__title">What's the name of your store?</h1>
          </div>

          {/*  */}
          <div>
            <p className="header__sub-title">
              Something sleek sounding or super weird. Make it memorable.
              <span role="img" aria-label="call-hand">
                🙌🏾
              </span>
            </p>
          </div>

          {/*  */}
          <div>
            {/*  */}
            <Field
              name="storeName"
              render={({ field, form }) => (
                <GenericInput {...field} {...form} />
              )}
            />
          </div>
        </div>

        {/* Page footer */}
        <div className="footer">
          <div className="footer__body">
            <Link to="/signup/phone-number">
              <button
                type="button"
                className={
                  isValid ? "footer__btn" : "footer__btn footer__btn--disabled"
                }
                disabled={!isValid}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default StoreName;
