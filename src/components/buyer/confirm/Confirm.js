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

class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    // Destructure route parameters
    let { storeName, humanId } = this.props.match.params;
    let { data, history, onOrderComplete } = this.props;

    // Destructure state
    let { phoneNum } = this.state;

    return (
      <div>
        {/* Confirm component */}
        <BottomModal {...this.props}>
          <Mutation
            mutation={CREATE_ORDER}
            onCompleted={async result => {
              // Pass order ID to waiting
              await onOrderComplete(result.createOrder.id);

              // Close Confirmation modal
              await this.props.toggleModal();

              // Open Waiting modal
              this.props.toggleWaitingModal();
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
