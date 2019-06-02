import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { Mutation, Query } from "react-apollo";
import _ from "lodash";
import styled from "@emotion/styled";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { changeSearchText } from "../mutations";
import gql from "graphql-tag";
import { getAccountName, getSearchText } from "../queries";

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
    <Mutation mutation={changeSearchText} variables={{ text: text }}>
      {(changeSearchText, { client, loading, error }) => {
        const searchText = client.readQuery({
          query: gql`
            query SearchText {
              searchText @client
            }
          `
        });

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
            <Query query={getAccountName}>
              {({ data }) => {
                console.log(data);
                return (
                  !_.isEmpty(data.categories) &&
                  data.categories.map(c => <div key={c.id}>{c.name}</div>)
                );
              }}
            </Query>
          </TextFieldWrapper>
        );
      }}
    </Mutation>
  );
};

export default SearchField;
