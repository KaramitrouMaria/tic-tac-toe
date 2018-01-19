import React from "react";
import Loadable from 'react-loadable';
import { Route, Switch } from "react-router-dom";

const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const AsyncGame = Loadable({
  loader: () => import("../../views/Game/Game"),
  loading: MyLoadingComponent
});

const AsyncScoreBoard = Loadable({
  loader: () => import("../../views/ScoreBoard/ScoreBoard"),
  loading: MyLoadingComponent
});

export default ({ childProps }) =>
  <Switch>
    <Route path="/game" exact component={AsyncGame} props={childProps}/>
    <Route path="/scoreboard" exact component={AsyncScoreBoard} props={childProps}/>
  </Switch>;