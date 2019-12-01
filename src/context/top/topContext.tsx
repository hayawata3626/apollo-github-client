import React, { useContext } from "react";
import { GetRepositoriesQueryResult } from "../../grpahql/generated/type";
import { useRepositories } from "./useRepositories";

const TopContext = React.createContext<
  Pick<GetRepositoriesQueryResult, "data" | "error"> | undefined
>(undefined);

export function useTop() {
  const context = useContext(TopContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  // TODO: キャスト以外の方法を探す
  return context;
}

export const TopProvider: React.FC = ({ children }) => {
  const result = useRepositories();
  return <TopContext.Provider value={result}>{children}</TopContext.Provider>;
};
