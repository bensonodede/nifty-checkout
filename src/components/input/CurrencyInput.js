import React, { Component } from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

import "./styles.css";

// Number mask input definition
const numberMask = createNumberMask({
  prefix: "",
  suffix: "",
  allowDecimal: true
  // integerLimit:""
});

class CurrencyInput extends Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
  }
  render() {
    let { setFieldValue, name, value, errors } = this.props;
    let { focused } = this.state;
    console.log(this.props);

    return (
      <div>
        <div
          className={
            "currency-input " +
            (focused ? "currency-input--focus" : "") +
            (errors.price && !focused ? " currency-input--error" : "")
          }
        >
          <p className="currency-input__inline-label">KES</p>
          {/* Input phone number entry */}
          <MaskedInput
            // onFocus={() => {
            //   this.setState({ focused: true });
            // }}
            // onBlur={() => {
            //   this.setState({ focused: false });
            // }}
            onChange={event => {
              let val = event.target.value;
              setFieldValue(name, val);
            }}
            value={value}
            className="currency-input__entry"
            mask={numberMask}
          />
        </div>
        <p className="input__error-message">{errors.price}</p>
      </div>
    );
  }
}

export default CurrencyInput;
