import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { Mutation } from "react-apollo";
import _ from "lodash";
import styled from "@emotion/styled";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { changeSearchText } from "../mutations";
import gql from "graphql-tag";

const TextFieldWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background: #fff;
  padding: 20px;
`;

type Props = {
  text: string;
  onSearchRepository: (text: string) => void;
};

const SearchField: React.FC<Props> = ({ text, onSearchRepository }: Props) => {
  const [inputText, setInputValue] = useState<string>("");

  return (
    <Mutation
      mutation={changeSearchText}
      variables={{ text: text }}
      update={cache => {
        const { searchText } = cache.readQuery({
          query: gql`
            query SearchText {
              searchText @client
            }
          `
        });
        console.log(searchText, "searchText");
        // const { todos } = cache.readQuery({ query: GET_TODOS });
        // cache.writeQuery({
        //   query: GET_TODOS,
        //   data: { todos: todos.concat([addTodo]) },
        // });
      }}
    >
      {(changeSearchText, { client, loading, error }) => {
        const searchText = client.readQuery({
          query: gql`
            query SearchText {
              searchText @client
            }
          `
        });

        console.log(searchText, "searchText");

        const handleInputEnter = e => {
          setInputValue(e.target.value);
          changeSearchText({ variables: { text: e.target.value } });
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

export default SearchField;
