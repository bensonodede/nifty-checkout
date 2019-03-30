import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Import seller page components
import Products from "./components/seller/Products";
import AddProduct from "./components/seller/AddProduct";
import AddImage from "./components/seller/AddImage";

// Import buyer page components
import Home from "./components/Home";
import Review from "./components/buyer/Review";
import Payment from "./components/buyer/Payment";
import PhoneNum from "./components/buyer/phoneNum";

// Initialize apollo client
const client = new ApolloClient({
  uri: "https://nifty-server-480a42431a.herokuapp.com/nifty-server/dev"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* Seller routes */}
            <Route path="/:storeName/products" component={Products} />
            <Route path="/:storeName/add-product" component={AddProduct} />
            <Route path="/:storeName/add-image" component={AddImage} />
            {/* Buyer routes */}
            <Route path="/:storeName/review" component={Review} />
            <Route path="/:storeName/payment" component={Payment} />
            <Route path="/:storeName/phonenum" component={PhoneNum} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
