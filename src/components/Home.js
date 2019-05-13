import React, { Component } from "react";

// Import styles
import "../styles/index.css";
import BottomModal from "./overlay/BottomModal";

class Home extends Component {
  constructor(props) {
    super(props);

    //
    this.state = {
      modal: false
    };
  }

  triggerModal = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  };

  render() {
    return (
      <div>
        <BottomModal
          show={this.state.modal}
          onBackgroundClick={this.triggerModal}
        >
          <p>Hello</p>
          <p>This is a test</p>
          <button onClick={this.triggerModal}>CLOSE</button>
        </BottomModal>
        <div className="App-container">
          {/* Home header */}
          <div className="header">
            <h1 className="header__title">Welcome</h1>
          </div>
        </div>

        {/* Home footer  */}
        <div className="footer">
          <div className="footer__body">
            <button
              onClick={this.triggerModal}
              className="footer__btn footer__btn--large"
            >
              Start here
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
