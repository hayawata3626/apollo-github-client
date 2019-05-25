import React, { useState } from "react";
import "./App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import SearchField from "./components/SearchField";
import Repository from "./components/Repository";
import { CircularProgress } from "@material-ui/core";
import styled from "@emotion/styled";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";

const query = gql`
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

const ProgressWrapper = styled("div")`
  && {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const App = () => {
  const [text, setText] = useState<string>("");

  const handleSearchRepository = text => {
    setText(text);
  };

  return (
    <div className="App">
      <SearchField text={text} onSearchRepository={handleSearchRepository} />
      <Query query={query} variables={{ searchText: text }}>
        {({ data, loading, error }: any) => {
          if (loading)
            return (
              <ProgressWrapper>
                <CircularProgress />
              </ProgressWrapper>
            );
          if (error) return `Error! ${error}`;

          return (
            <div>
              {_.isEmpty(data.search.nodes) && _.isEmpty(data.searchText) && (
                <Typography>
                  検索結果がありません。もう一度検索し直してください。
                </Typography>
              )}
              {data.search.nodes.map(repo => {
                return (
                  <Repository
                    key={repo.id}
                    url={repo.url}
                    name={repo.name}
                    starCount={10}
                  />
                );
              })}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default React.memo(App);
