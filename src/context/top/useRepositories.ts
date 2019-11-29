import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  GetRepositoriesQuery,
  GetRepositoriesQueryVariables
} from "../../grpahql/generated/type";

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

export function useRepositories() {
  const { data, error } = useQuery<
    GetRepositoriesQuery,
    GetRepositoriesQueryVariables
  >(GET_REPOSITORIES, {
    variables: { searchText: "react" }
  });
  return { data, error };
}
