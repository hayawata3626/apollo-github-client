import gql from "graphql-tag";

export const changeSearchText = gql`
  mutation($text: String!) {
    changeValue(text: $text) @client
  }
`;
