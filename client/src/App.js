import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Home from "./components/Home";
import Review from "./components/Review";
import Payment from "./components/Payment";
import PhoneNum from "./components/phoneNum";
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
