import { CircularProgress, Typography } from "@material-ui/core";
import * as React from "react";
import { useTop } from "../context/top/topContext";
// import { GetRepositoriesQueryResult } from "../grpahql/generated/type";

export const TopPage: React.FC = () => {
  const { data, error } = useTop();

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (!data) {
    return <CircularProgress />;
  }

  // const repositories = data.search.nodes;
  return (
    <div>
      {/*{repositories.map(repository => (*/}
      {/*  <div>{repository.name}</div>*/}
      {/*))}*/}
    </div>
  );
};
