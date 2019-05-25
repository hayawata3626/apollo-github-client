import React from "react";
import ReactDOM from "react-dom";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { withClientState } from "apollo-link-state";
import initialState from "./state";
import resolvers from "./resolver";
import App from "./App";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  }
});

const stateLink = withClientState({
  cache,
  defaults: initialState,
  resolvers: resolvers
});

const link = ApolloLink.from([stateLink, httpLink]);

const client = new ApolloClient({ link, cache });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
