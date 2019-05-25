import * as React from "react";
import TextField from "@material-ui/core/TextField";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import _ from "lodash";
import styled from "@emotion/styled";
import { Button } from "@material-ui/core";
import { useState } from "react";

const TextFieldWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background: #fff;
  padding: 20px;
`;

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
  const [inputText, setInputValue] = useState<string>("");

  return (
    <Mutation mutation={CHANGE_SEARCH_TEXT} variables={{ text: text }}>
      {changeValue => {
        const handleInputEnter = e => {
          setInputValue(e.target.value);
          changeValue({ variables: { text: inputText } });
          if (e.keyCode === 13) {
            onSearchRepository(inputText);
          }
        };

        const handleSearchButtonClick = () => {
          onSearchRepository(inputText);
        };

        return (
          <TextFieldWrapper>
            <TextField
              label={"検索"}
              value={inputText}
              onChange={handleInputEnter}
              onKeyDown={handleInputEnter}
            />
            <Button
              variant={"contained"}
              color={"secondary"}
              disabled={_.isEmpty(inputText)}
              onClick={handleSearchButtonClick}
            >
              検索
            </Button>
          </TextFieldWrapper>
        );
      }}
    </Mutation>
  );
};

export default React.memo(SearchField);
