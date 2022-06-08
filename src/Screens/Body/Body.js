import React, { useState } from "react";
import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ListView from "./ListView";
import MapView from "./MapView";
import SearchForm from "../../Components/Form/SearchForm";

const Body = () => {
  const { tabId } = useParams();
  let { path, url } = useRouteMatch();

  return (
    <div className="tab-container">
      <div className="Title">
        <h1>{tabId}</h1>
        <NavLink to={`${url}/mapview`} activeClassName="active">
          Map View
        </NavLink>
        <NavLink to={`${url}/listview`} activeClassName="active">
          List View
        </NavLink>
      </div>
      <div className="Display">
        <Switch>
          <Route path={`${path}/mapview`}>
            <MapView tabId={tabId} />
          </Route>
          <Route path={`${path}/listview`}>
            <ListView tabId={tabId} />
          </Route>
        </Switch>
        </div>
    </div>
  );
};

export default Body;
