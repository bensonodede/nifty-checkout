import React, { Component } from "react";
import Cookies from "js-cookie";
import { Mutation } from "react-apollo";
import { CREATE_ORDER } from "../../graphql/mutation";
import { Helmet } from "react-helmet";

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
    let { price, id } = this.props.location.state.data;

    // Get phone number from cookies
    let { phoneNum } = this.state;

    // Run mutation to create order
    await createOrder({
      variables: {
        buyerNum: phoneNum,
        storeName,
        productID: id,
        price
      }
    });
  };

  /********** End Handle Mutation **********/

  render() {
    // Destructure route parameters
    let { storeName, humanId } = this.props.match.params;
    let { history } = this.props;

    // Get phone number from cookies
    let { phoneNum } = this.state;

    return (
      <Mutation
        mutation={CREATE_ORDER}
        onCompleted={data => {
          console.log(data);
          this.props.history.push({
            pathname: `/${storeName}/${humanId}/waiting`,
            state: { orderId: data.createOrder.id }
          });
        }}
      >
        {(createOrder, { loading, error }) => {
          // Error state
          if (error) {
            this.props.history.push(`/${storeName}/${humanId}`);
          }

          // Render component
          return (
            <BottomModal {...history}>
              <div className="confirm">
                {/* Document title */}
                <Helmet>
                  <title>Confirmation - {storeName}</title>
                </Helmet>

                {/* Confirm body */}
                <div className="confirm__header">
                  <p className="confirm__title">Do you want to continue with</p>
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
                          state: { data: this.props.location.state.data }
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
            </BottomModal>
          );
        }}
      </Mutation>
    );
  }
}

export default Confirm;
