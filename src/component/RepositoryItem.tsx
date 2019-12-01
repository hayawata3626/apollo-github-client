import * as React from "react";
import { Card, Typography } from "@material-ui/core";
import { Repository } from "../context/top/state";

type Props = Readonly<{
  repository: Repository;
}>;

export const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <Card style={{ marginBottom: "24px" }}>
      <Typography>{repository.id}</Typography>
      <Typography>{repository.name}</Typography>
    </Card>
  );
};
