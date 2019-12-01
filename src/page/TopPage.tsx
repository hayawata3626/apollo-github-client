import { CircularProgress, Typography } from "@material-ui/core";
import * as React from "react";
import { useTop } from "../context/top/topContext";
import { TopTemplate } from "../component/TopTemplate";

export const TopPage: React.FC = () => {
  const { data, error } = useTop();

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <div>
      <TopTemplate />
    </div>
  );
};
