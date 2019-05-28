import gql from "graphql-tag";

export const changeSearchText = gql`
  mutation($text: String!) {
    changeSearchText(text: $text) @client
  }
`;
