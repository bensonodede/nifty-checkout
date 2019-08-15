import React, { Component } from "react";
import Cookies from "js-cookie";
import { Mutation } from "react-apollo";
import { CREATE_ORDER } from "../../graphql/mutation";

import { BottomModal } from "../../modal";

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
    let { storeName, humanId } = this.props.match.params;
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
          // Loading state
          if (loading) {
            {
              /* return <ReviewLoader />; */
            }
          }

          // Error state
          if (error) {
            {
              /* return <Error />; */
            }
          }

          // Render component
          return (
            <BottomModal {...history}>
              <div className="confirm">
                {/* Confirm header */}
                <div className="confirm__header">
                  <p className="confirm__title">Do you want to continue with</p>
                  <p className="confirm__title confirm__title--bold">
                    +{phoneNum}?
                  </p>
                </div>

                {/* Button row */}
                <div className="confirm__row">
                  {/* 'NO' button */}
                  <button
                    onClick={() =>
                      history.push(`/${storeName}/${humanId}/phone-number`)
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
                {/* End button row */}
              </div>
            </BottomModal>
          );
        }}
      </Mutation>
    );
  }
}

export default Confirm;
