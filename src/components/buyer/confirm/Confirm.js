import React, { Component } from "react";
import Cookies from "js-cookie";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import { CREATE_ORDER } from "../../graphql/mutation";

// Import components
import { BottomModal } from "../../modal";
import { Loader } from "../../loader";

// Import styles
import "./styles.css";
import Waiting from "../waiting/Waiting";

class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waitingAnimate: false,
      waitingVisible: false,
      orderId: "",
      phoneNum: Cookies.get("phoneNum")
    };
  }
  /********** Handle Mutation **********/
  handleClick = async createOrder => {
    // Get URL variables
    let { storeName } = this.props.match.params;
    let { price, id } = this.props.data;

    // Get phone number from cookies
    let { phoneNum } = this.state;

    // Run mutation to create order
    await createOrder({
      variables: {
        storeName,
        price,
        buyerNum: phoneNum,
        productID: id
      }
    });
  };

  /********** End Handle Mutation **********/

  /********** Toggle waiting modal appearance **********/

  toggleWaitingModal = () => {
    let { waitingVisible } = this.state;

    if (waitingVisible) {
      this.setState({ waitingAnimate: false });
      setTimeout(() => this.setState({ waitingVisible: false }), 500);
    } else {
      this.setState({ waitingVisible: true, waitingAnimate: true });
    }
  };

  render() {
    // Destructure route parameters
    let { storeName, humanId } = this.props.match.params;
    let { data, history } = this.props;

    // Destructure state
    let { waitingVisible, waitingAnimate, orderId, phoneNum } = this.state;

    return (
      <div>
        <Waiting
          orderId={orderId}
          toggleModal={e => e.stopPropagation}
          animate={waitingAnimate}
          visible={waitingVisible}
        />

        {/* Confirm component */}
        <BottomModal {...this.props}>
          <Mutation
            mutation={CREATE_ORDER}
            onCompleted={orderData => {
              this.setState(
                {
                  orderId: orderData.createOrder.id
                },
                () => {
                  this.props.toggleModal();
                  this.toggleWaitingModal();
                }
              );
            }}
          >
            {(createOrder, { loading, error }) => {
              // Error state
              if (error) {
                history.push(`/${storeName}/${humanId}`);
              }

              // Render component
              return (
                <div className="confirm">
                  {/* Confirm body */}
                  <div className="confirm__header">
                    <p className="confirm__title">
                      Do you want to continue with
                    </p>
                    <p className="confirm__title confirm__title--bold">
                      +{phoneNum}?
                    </p>
                  </div>

                  {loading ? (
                    /********** Loader **********/
                    <div className="confirm__loader-container">
                      <div className="confirm__loader">
                        <Loader />
                      </div>
                    </div>
                  ) : (
                    /********** Button row **********/
                    <div className="confirm__row">
                      {/* 'NO' button */}
                      <button
                        onClick={() =>
                          history.push({
                            pathname: `/${storeName}/${humanId}/phone-number`,
                            state: { data }
                          })
                        }
                        className="confirm__btn"
                      >
                        No
                      </button>

                      {/* 'YES' button */}
                      <button
                        onClick={() => this.handleClick(createOrder)}
                        className="confirm__btn  confirm__btn--warn"
                      >
                        Yes
                      </button>
                    </div>
                    /********** End Button row **********/
                  )}
                </div>
              );
            }}
          </Mutation>
        </BottomModal>
      </div>
    );
  }
}

export default withRouter(Confirm);
