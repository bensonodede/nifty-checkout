import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import Firebase, { FirebaseContext } from "./components/firebase/";
import { setDefaultBreakpoints, BreakpointProvider } from "react-socks";

// Import styles
import "./app.scss";
import "react-virtualized/styles.css";

// Import routes
import Routes from "./routes";

// Import server url environment variables
let serverUrl;

// Define production domain
let productionHost = "withfinn.com";

// Check if site is using production domain or development domain
if (window.location.hostname.toLowerCase().search(productionHost) < 0) {
  // Initialize DEVELOPMENT DOMAIN prisma server
  serverUrl = process.env.REACT_APP_DEV_SERVER_URL;
} else {
  // Initialize PRODUCTION DOMAIN prisma server
  serverUrl = process.env.REACT_APP_PROD_SERVER_URL;
}

// Devices screen breakpoints
setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 568 },
  { desktop: 1024 },
  { widescreen: 1216 },
  { fullhd: 1408 },
]);

const link = createHttpLink({
  uri: serverUrl,
});

// Initialize apollo client
const client = new ApolloClient({
  // Point client to server address
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

class App extends Component {
  render() {
    return (
      <div>
        {/* Apollo Provider allows GraphQL API access to children */}
        <ApolloProvider client={client}>
          {/* Firebase Provider allows Firebase API access to children */}
          <FirebaseContext.Provider value={new Firebase()}>
            {/* Breakpoint provider */}
            <BreakpointProvider>
              {/* App Routes */}
              <Routes />
            </BreakpointProvider>
          </FirebaseContext.Provider>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
