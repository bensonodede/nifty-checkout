import React, { Component } from "react";
import MaskedInput from "react-text-mask";

// Import styles
import "./styles.scss";

class GenericMaskedInput extends Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
  }

  render() {
    let { focused } = this.state;

    // Destructure props
    let {
      setFieldValue,
      setFieldTouched,
      name,
      value,
      errors,
      validateField,
      mask,
      placeholder
    } = this.props;

    return (
      <div>
        <div
          className={
            "label-input " +
            (focused ? "label-input--focus " : "") +
            (errors[name] && !focused ? "label-input--error" : "")
          }
        >
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
              await setFieldTouched(name, true);
              validateField(name);
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
        </div>
        <p className="input__error-message">{errors[name]}</p>
      </div>
    );
  }
}

export default GenericMaskedInput;
