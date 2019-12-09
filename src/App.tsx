import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TopPage } from "./page/TopPage";
import { TopProvider } from "./context/top/topContext";
import { ErrorBoundary } from "./component/common/ErrorBoundary";
// import getRepositories from "./graphql/query/getRepositories.graphql";

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/">
            <TopProvider>
              <TopPage />
            </TopProvider>
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};
