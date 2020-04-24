import React from "react";
import { withApollo } from "@apollo/react-hoc";

// Import functions
import getSubscriptionPlan from "./getSubscriptionPlan";
import checkStatus from "./checkStatus";

const withSubscription = (Component) => {
  class WithSubscritpion extends React.Component {
    constructor(props) {
      super(props);

      // Subscription status
      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      // Destructure props
      let { storeUsername } = this.props.match.params;
      let { client: apolloClient } = this.props;
      let { match, history } = this.props;

      // Get subscription plan and verify
      getSubscriptionPlan(storeUsername, apolloClient).then(({ data }) => {
        if (data) {
          this.setState({ data });
          // Get subscription plan
          let { storeSubscriptionPlan } = data;

          // Check status
          checkStatus({ storeSubscriptionPlan, match, history, apolloClient });
        }
      });
    }

    render() {
      return <>{this.state.data && <Component {...this.props} />}</>;
    }
  }

  return withApollo(WithSubscritpion);
};

export default withSubscription;
