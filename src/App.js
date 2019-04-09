import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Firebase, { FirebaseContext } from "./components/firebase/";

// Import routes
import Routes from "./components/routes";

// Initialize apollo client
const client = new ApolloClient({
  // Point client to server address
  uri: "https://nifty-server-480a42431a.herokuapp.com/nifty-server/dev"
});

class App extends Component {
  render() {
    return (
      <div>
        {/* Apollo Provider allows GraphQL API access to children */}
        <ApolloProvider client={client}>
          {/* Firebase Provider allows Firebase API access to children */}
          <FirebaseContext.Provider value={new Firebase()}>
            {/* App routes */}
            <Routes />
          </FirebaseContext.Provider>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
