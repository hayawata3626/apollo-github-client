import React from "react";

export const TopContext = React.createContext<ReadonlyArray<string>>([]);

export const TopProvider: React.FC = ({ children }) => {
  // TODO: ここでreadQueryやreadFragmentを使う。また{1: {id:1, ...}}のようなmapping処理も
  const fruits = ["apple", "grape", "banana"];
  return <TopContext.Provider value={fruits}>{children}</TopContext.Provider>;
};
