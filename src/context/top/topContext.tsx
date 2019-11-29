import React, { useContext } from "react";
import { GetRepositoriesQueryResult } from "../../grpahql/generated/type";
import { useRepositories } from "./useRepositories";

const TopContext = React.createContext<Partial<GetRepositoriesQueryResult>>({});

export function useTop() {
  const context = useContext(TopContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
}

export const TopProvider: React.FC = ({ children }) => {
  const result = useRepositories();
  return <TopContext.Provider value={result}>{children}</TopContext.Provider>;
};
