import * as React from "react";
import { RepositoryItem } from "./RepositoryItem";
import { Repository } from "../context/top/state";
import { useTop } from "../context/top/topContext";
import { CircularProgress } from "@material-ui/core";

export const RepositoryList: React.FC = () => {
  const { data } = useTop();
  if (!data) {
    return <CircularProgress />;
  }
  const repositories: ReadonlyArray<Repository> =
    (data.search.nodes && data.search.nodes.map(repositoryMapper)) || [];

  return (
    <>
      {repositories.map((repository, index) => (
        <RepositoryItem key={index} repository={repository} />
      ))}
    </>
  );
};

const repositoryMapper = (repository): Repository => ({
  id: repository.id,
  name: repository.name
});
