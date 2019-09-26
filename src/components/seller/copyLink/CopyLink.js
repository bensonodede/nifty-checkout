import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Mixpanel } from "../../mixpanel";

// Import components
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";

// Import styles
import "./styles.css";

class CopyLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Copy text component
      copyText: "Copy store link",
      storeLink: ""
    };
  }

  componentDidMount() {
    let { storeName } = this.props.match.params;
    this.setState({ storeLink: `https://magicfinn.com/${storeName}` });
  }

  /********** Copy store link **********/
  copyStoreLink = () => {
    // Track link copy
    Mixpanel.track("Store link copied");

    // Copy store link to clipboard
    navigator.clipboard.writeText(this.state.storeLink);

    // Toggle copy button text
    this.setState({ copyText: "Copied!" }, () => {
      setTimeout(() => this.setState({ copyText: "Copy store link" }), 800);
    });
  };

  render() {
    //   Destructure state
    let { copyText } = this.state;

    return (
      <div onClick={() => this.copyStoreLink()} className="copy">
        <p className="copy__text">{copyText}</p>
        <div className="copy__icon">
          <Icon icon={ic_content_copy} size={"100%"} />
        </div>
      </div>
    );
  }
}

export default withRouter(CopyLink);
