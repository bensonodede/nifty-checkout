import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "react-apollo";
import Firebase, { FirebaseContext } from "./components/firebase/";

// Import routes
import Routes from "./components/Routes";

// Configure network
const link = createUploadLink({
  uri: "https://finn-server.herokuapp.com/graphql"
});

// Initialize apollo client
const client = new ApolloClient({
  // Point client to server address
  link,
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <div>
        {/* Apollo Provider allows GraphQL API access to children */}
        <ApolloProvider client={client}>
          {/* Firebase Provider allows Firebase API access to children */}
          <FirebaseContext.Provider value={new Firebase()}>
            {/* App Routes */}
            <Routes />
          </FirebaseContext.Provider>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
