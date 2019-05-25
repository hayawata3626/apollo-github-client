import * as React from "react";
import TextField from "@material-ui/core/TextField";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CHANGE_SEARCH_TEXT = gql`
  mutation($text: String!) {
    changeValue(text: $text) @client
  }
`;

type Props = {
  text: string;
  onSearchRepository: (text: string) => void;
};

const SearchField = ({ text, onSearchRepository }: Props) => {
  return (
    <Mutation mutation={CHANGE_SEARCH_TEXT} variables={{ text: text }}>
      {changeValue => {
        const handleInputEnter = (e: any) => {
          changeValue({ variables: { text: e.target.value } });
          if (e.keyCode === 13) {
            onSearchRepository(e.target.value);
          }
        };
        return (
          <TextField
            value={text}
            onChange={handleInputEnter}
            onKeyDown={handleInputEnter}
          />
        );
      }}
    </Mutation>
  );
};

export default React.memo(SearchField);
