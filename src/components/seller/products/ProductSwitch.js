// Import packages
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import components
import Products from "./Products";
import EditProduct from "./EditProduct";
import ProductModal from "./ProductModal";

//
import "../../overlay/bottom-modal.css";

//
class ProductSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;

    //

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    //
    const { location } = this.props;

    //
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    //
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Redirect from="/:storeName" exact to="/:storeName/products" />

          <Route exact path="/:storeName/products" component={Products} />
        </Switch>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames={"modal"}
            timeout={1000}
          >
            <div>
              <Switch location={location}>
                {isModal ? (
                  <Route
                    path="/:storeName/products/options"
                    component={ProductModal}
                  />
                ) : null}
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default ProductSwitch;
