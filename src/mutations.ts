import gql from "graphql-tag";

export const changeSearchText = gql`
  mutation($text: String!) {
    changeSearchText(text: $text) @client
  }
`;

export const applyInitialData = gql`
  mutation($initialData: InitiallDataInput!) {
    applyInitialData(initialData: $initialData) @client {
      categories @client {
        id
        name
      }
      accountName @client {
        id
        name
      }
    }
  }
`;
