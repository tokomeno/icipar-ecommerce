import React from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { TodoApp } from "./pages/Todo";

export const HistoryContext = React.createContext<History>(
  (null as any) as History
);

const App: React.FC<{}> = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/todos" exact component={TodoApp} />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
