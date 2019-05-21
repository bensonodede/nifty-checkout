// Import packages
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import components
import Products from "./Products";
import ProductModal from "./ProductModal";
import DeleteModal from "./DeleteModal";
import EditProduct from "./EditProduct";

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
          {/*  */}
          <Redirect
            from="/:storeName/products/options"
            exact
            to="/:storeName/products"
          />

          {/*  */}
          <Redirect
            from="/:storeName/products/:id/delete"
            exact
            to="/:storeName/products"
          />

          <Route exact path="/:storeName/products" component={Products} />
          <Route path="/:storeName/products/:id/edit" component={EditProduct} />
        </Switch>

        {/*  */}
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames={"modal"}
            timeout={1000}
          >
            <div>
              {isModal && (
                <Switch location={location}>
                  <Route
                    path="/:storeName/products/options"
                    render={props => <ProductModal {...props} />}
                  />

                  <Route
                    path="/:storeName/products/:id/delete"
                    render={props => <DeleteModal {...props} />}
                  />
                </Switch>
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default ProductSwitch;
