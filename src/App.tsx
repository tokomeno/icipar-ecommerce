import React from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { TodoApp } from "./pages/Todo";
import { AboutUsPage } from "./pages/about-us/aboutUsPage";

export const HistoryContext = React.createContext<History>(
  (null as any) as History
);

const App: React.FC<{}> = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-us" exact component={AboutUsPage} />
        <Route path="/todos" exact component={TodoApp} />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
