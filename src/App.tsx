import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TopPage } from "./page/TopPage";
import { TopProvider } from "./context/top/topContext";
// import getRepositories from "./graphql/query/getRepositories.graphql";

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <TopProvider>
            <TopPage />
          </TopProvider>
        </Route>
      </Switch>
    </Router>
  );
};
