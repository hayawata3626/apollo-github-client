import React from "react";
import ReactDOM from "react-dom";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import initialState from "./state";
import resolvers from "./resolvers";
import App from "./App";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({ link, cache, resolvers: resolvers });

cache.writeData({
  data: initialState
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
