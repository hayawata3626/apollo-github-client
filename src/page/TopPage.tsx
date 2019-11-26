import * as React from "react";
import { useContext } from "react";
import { TopContext } from "../context/topContext";
import { Typography } from "@material-ui/core";

export const TopPage: React.FC = () => {
  const fruits = useContext<ReadonlyArray<string>>(TopContext);
  return (
    <div>
      {fruits.map((fruit, index) => (
        <Typography key={index}>{fruit}</Typography>
      ))}
    </div>
  );
};
