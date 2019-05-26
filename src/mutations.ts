import gql from "graphql-tag";

export const changeSearchTextValue = gql`
  mutation($text: String!) {
    changeSearchTextValue(text: $text) @client
  }
`;
