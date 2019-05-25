import React, { useState } from "react";
import "./App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import SearchField from "./components/SearchField";
import Repository from "./components/Repository";
import { CircularProgress } from "@material-ui/core";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const query = gql`
  query($text: String!) {
    search(first: 10, query: $text, type: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const App = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="App">
      <Query query={query} variables={{ text: text }}>
        {({ data, loading, error }: any) => {
          if (loading) return <CircularProgress />;
          if (error) return `Error! ${error}`;

          const handleSearchRepository = text => {
            console.log(text);
            setText(text);
          };
          return (
            <div>
              <SearchField
                text={data.searchText}
                onSearchRepository={handleSearchRepository}
              />
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
