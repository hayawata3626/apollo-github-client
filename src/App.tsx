import React, { useState } from "react";
import { Query } from "react-apollo";
import { CircularProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";
import _ from "lodash";
import { getRepositories } from "./queries";
import Repository from "./components/Repository";
import SearchField from "./components/SearchField";

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
    <div>
      <SearchField text={text} onSearchRepository={handleSearchRepository} />
      <Query query={getRepositories} variables={{ searchText: text }}>
        {({ data, loading, error }) => {
          if (loading)
            return (
              <ProgressWrapper>
                <CircularProgress />
              </ProgressWrapper>
            );
          if (error) return `ERROR: ${error}`;

          return (
            <div>
              {_.isEmpty(data.search.nodes) && (
                <Typography align={"center"}>
                  検索結果がありません。もう一度検索し直してください&#x1f62d;
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
