import React from "react";
import "./App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const query = gql`
  query($searchText: String!) {
    search(first: 10, query: $searchText, type: REPOSITORY) {
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

const App: React.FC = () => {
  return (
    <div className="App">
      <Query query={query} variables={{ searchText: "apollo" }}>
        {({ data }: any) => {
          console.log(data);
          return <div>ほげ</div>;
        }}
      </Query>
    </div>
  );
};

export default App;
