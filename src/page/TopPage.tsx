import * as React from "react";
import { useTop } from "../context/topContext";

export const TopPage: React.FC = () => {
  const { search } = useTop();
  console.log(search);
  const repositories = search.nodes;
  return (
    <div>
      {repositories.map(repository => (
        <div>{repository.name}</div>
      ))}
    </div>
  );
};
