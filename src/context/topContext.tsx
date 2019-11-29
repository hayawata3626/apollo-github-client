import gql from "graphql-tag";
import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CircularProgress, Typography } from "@material-ui/core";
import {
  GetRepositoriesQuery,
  GetRepositoriesQueryVariables
} from "../grpahql/generated/type";
// import GET_REPOSITORIES from "../graphql/query/getRepositories.graphql";

const TopContext = React.createContext<any>([]);

const GET_REPOSITORIES = gql`
  query GetRepositories($searchText: String!) {
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
  }
`;

export function useTop() {
  const context = useContext(TopContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
}

export const TopProvider: React.FC = ({ children }) => {
  // TODO: ここでreadQueryやreadFragmentを使う。また{1: {id:1, ...}}のようなmapping処理も
  const { data, error } = useQuery<
    GetRepositoriesQuery,
    GetRepositoriesQueryVariables
  >(GET_REPOSITORIES, {
    variables: { searchText: "react" }
  });

  if (!data) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>{error.message}</Typography>;
  }
  return <TopContext.Provider value={data}>{children}</TopContext.Provider>;
};
