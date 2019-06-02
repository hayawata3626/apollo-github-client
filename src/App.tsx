import React, { useState } from "react";
import { Mutation, Query } from "react-apollo";
// import { CircularProgress } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";
import _ from "lodash";
import { getAccountName, getRepositories } from "./queries";
// import Repository from "./components/Repository";
import SearchField from "./components/SearchField";
import { applyInitialData } from "./mutations";
import { JsonModel } from "./initialData";

type ApplyInitialDataProps = {
  initialData: JsonModel;
  applyInitialData: ({ variables: JsonModel }) => void;
};

class ApplyInitialData extends React.Component<ApplyInitialDataProps, {}> {
  componentDidMount(): void {
    this.props.applyInitialData({
      variables: this.props.initialData
    });
  }
  render() {
    return (
      <Query query={getAccountName}>
        {({ data }) => {
          return <div>データ</div>;
        }}
      </Query>
    );
  }
}

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

type Props = {
  initialData: JsonModel;
};

const App: React.FC<Props> = ({ initialData }: Props) => {
  const [text, setText] = useState<string>("");

  const handleSearchRepository = text => {
    setText(text);
  };

  return (
    <div>
      <SearchField text={text} onSearchRepository={handleSearchRepository} />
      {/*<Query query={getRepositories} variables={{ searchText: text }}>*/}
      {/*  {({ data, loading, error }) => {*/}
      {/*    if (loading)*/}
      {/*      return (*/}
      {/*        <ProgressWrapper>*/}
      {/*          <CircularProgress />*/}
      {/*        </ProgressWrapper>*/}
      {/*      );*/}
      {/*    if (error) return `ERROR: ${error}`;*/}

      {/*    return (*/}
      {/*      <div>*/}
      {/*        {_.isEmpty(data.search.nodes) && (*/}
      {/*          <Typography align={"center"}>*/}
      {/*            検索結果がありません。もう一度検索し直してください&#x1f62d;*/}
      {/*          </Typography>*/}
      {/*        )}*/}
      {/*        {data.search.nodes.map(repo => {*/}
      {/*          return (*/}
      {/*            <Repository*/}
      {/*              key={repo.id}*/}
      {/*              url={repo.url}*/}
      {/*              name={repo.name}*/}
      {/*              starCount={repo.stargazers.totalCount}*/}
      {/*            />*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*</Query>*/}
      <Mutation
        mutation={applyInitialData}
        variables={{ initialData: initialData }}
      >
        {applyInitialData => {
          return (
            <ApplyInitialData
              initialData={initialData}
              applyInitialData={applyInitialData}
            />
          );
        }}
      </Mutation>
    </div>
  );
};

export default App;
