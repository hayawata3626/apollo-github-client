import gql from "graphql-tag";

export const getRepositories = gql`
  query($searchText: String!) {
    search(first: 10, query: $searchText, type: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          stargazers {
            totalCount
          }
        }
      }
    }
    searchText @client
  }
`;

export const getSearchText = gql`
  query getSearchText {
    searchText @client
  }
`;

export const getAccountName = gql`
  query {
    accountName @client {
      id
      name
    }
    categories @client
  }
`;
