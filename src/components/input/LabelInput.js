import React, { Component } from "react";
import MaskedInput from "react-text-mask";

// Import styles
import "./styles.css";

class LabelInput extends Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
  }
  render() {
    let {
      setFieldValue,
      name,
      value,
      errors,
      mask,
      label,
      validateField
    } = this.props;
    let { focused } = this.state;

    return (
      <div>
        <div
          className={
            "label-input " +
            (focused ? "label-input--focus " : "") +
            (errors[name] && !focused ? "label-input--error" : "")
          }
        >
          <p className="label-input__inline-label">{label}</p>

          {/* Input phone number entry */}
          <MaskedInput
            onFocus={() => {
              this.setState({ focused: true });
            }}
            onBlur={() => {
              this.setState({ focused: false });
            }}
            onChange={async event => {
              let val = event.target.value;
              await setFieldValue(name, val);
              validateField(name);
            }}
            value={value}
            className="label-input__entry"
            mask={mask}
            guide={false}
          />
        </div>
        <p className="input__error-message">{errors[name]}</p>
      </div>
    );
  }
}

export default LabelInput;
