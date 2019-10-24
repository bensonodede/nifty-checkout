import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "react-apollo";
import Firebase, { FirebaseContext } from "./components/firebase/";

// Import styles
import "./app.scss";
import "./styles/animation.scss";

// Import routes
import Routes from "./components/Routes";

// Import server url environment variables
let serverUrl;

// Define production domain
let productionHost = "magicfinn.com";

// Check if site is using production domain or development domain
if (window.location.hostname.toLowerCase().search(productionHost) < 0) {
  // Initialize DEVELOPMENT DOMAIN prisma server
  serverUrl = process.env.REACT_APP_DEV_SERVER_URL;
} else {
  // Initialize PRODUCTION DOMAIN prisma server
  serverUrl = process.env.REACT_APP_PROD_SERVER_URL;
}

const link = createUploadLink({
  uri: serverUrl
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
