import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Query, Mutation } from "react-apollo";
import numeral from "numeral";

// Import graphql query
import { PRODUCT_HUMANID_QUERY } from "../../graphql/query";

// Import components
import { Loader } from "../../loader";
import { PulseBtn } from "../../button";
import { Icon } from "react-icons-kit";
import { arrow_right } from "react-icons-kit/ikons/arrow_right";

// Import styles
import "./styles.css";
import { CREATE_ORDER } from "../../graphql/mutation";

// Review page loader
const ReviewLoader = () => (
  <div className="review__loader-container">
    <div className="review__loader">
      <Loader />
    </div>
  </div>
);

class Review extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;

    this.state = {
      phoneNum: cookies.get("phoneNum") || null,
      loaded: false,
      isPaused: true
    };
  }

  handleClick = async (createOrder, data) => {
    // Get URL variables
    let { storeName, humanId } = this.props.match.params;

    // Get buyer phone number from cookies
    let { phoneNum } = this.state;

    // Get data for create order variables
    let { id, price } = data.productByHumanId;

    console.log(data.productByHumanId);
    if (phoneNum) {
      //! Initiate M-pesa STK push
      console.log("One click checkout: ");
      console.log(phoneNum);

      // Run mutation to create order
      await createOrder({
        variables: {
          buyerNum: phoneNum,
          storeName,
          productID: id,
          price
        }
      });
      // this.props.history.push(`/${storeName}/${humanId}/phoneNum`);
    } else {
      //! Redirect to phone number entry
      console.log("First time?");
      // this.props.history.push(`/${storeName}/${humanId}/phoneNum`);
    }
  };

  render() {
    let { storeName, humanId } = this.props.match.params;
    let { loaded } = this.state;

    return (
      <Query
        query={PRODUCT_HUMANID_QUERY}
        variables={{
          storeName,
          humanId
        }}
      >
        {({ loading, error, data }) => {
          /********** LOADING STATE **********/

          if (loading) {
            return <ReviewLoader />;
          }

          /********** ERROR STATE **********/

          if (error) {
            console.log(error);
            return <p>Oops. an error occurred.</p>;
          }

          // Destructure data
          let { imgUrl, name, price } = data.productByHumanId;

          // Format price and convert to string
          price = numeral(price).format("'0,0'");

          return (
            <Mutation
              mutation={CREATE_ORDER}
              onCompleted={data => {
                console.log(data);
              }}
            >
              {(createOrder, { loading, error }) => {
                /********** Error handling **********/
                if (error) {
                  console.log(error);
                }

                /********** Loading state **********/
                if (loading) {
                  return <ReviewLoader />;
                }

                return (
                  <div className="review">
                    {/* Review Image */}
                    <img
                      onLoad={() => {
                        // Set image loaded state
                        this.setState({ loaded: true }, () => {
                          // Play pulse animation after 3s
                          setTimeout(() => {
                            this.setState({ isPaused: false });
                          }, 3000);
                        });
                      }}
                      src={imgUrl}
                      alt="unsplash"
                      className={loaded ? "review__img" : "review__img-loading"}
                    />

                    {loaded ? (
                      <div className="review__container">
                        {/* Review header */}
                        <CSSTransition
                          in={loaded}
                          appear={true}
                          mountOnEnter={true}
                          unmountOnExit={false}
                          classNames="transition__header"
                          timeout={3000}
                        >
                          <div className="review__header">
                            <p className="review__title">{name}</p>
                            <p className="review__sub-title">
                              <span>{price}</span>
                              <span className="review__currency">KSH</span>
                            </p>
                          </div>
                        </CSSTransition>

                        {/* Review footer */}
                        <CSSTransition
                          in={loaded}
                          appear={true}
                          mountOnEnter={true}
                          unmountOnExit={false}
                          classNames="transition__footer"
                          timeout={3000}
                        >
                          <div className="review__footer">
                            <PulseBtn
                              dark={false}
                              onClick={() => {
                                this.handleClick(createOrder, data);
                              }}
                              type={"button"}
                              isPaused={this.state.isPaused}
                              btnStyle={"review__btn"}
                            >
                              <div className="review__icon">
                                <Icon size={"100%"} icon={arrow_right} />
                              </div>
                            </PulseBtn>
                          </div>
                        </CSSTransition>

                        {/* End Review footer */}
                      </div>
                    ) : (
                      <ReviewLoader />
                    )}
                  </div>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default withCookies(Review);
