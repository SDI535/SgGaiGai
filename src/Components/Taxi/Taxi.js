import React, { useState, useEffect } from "react";
import LTAAPI from "./LTAAPI";
import { Switch, Route, NavLink } from "react-router-dom";
import TaxiList from "./TaxiList";
import TaxiMap from "./TaxiMap";

const Taxi = () => {
  const [taxiStands, setTaxiStands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await LTAAPI.get("/TaxiStands");
        setTaxiStands(response.data.value);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Taxis</h1>
        <NavLink to="/taxi/mapview">
          <button>Map View</button>
        </NavLink>

        <NavLink to="/taxi/listview">
          <button>List View</button>
        </NavLink>
        <div>
          <input type="text" placeholder="Search Taxi Stands" />
        </div>
      </div>
      <Switch>
        <Route exact path="/taxi/mapview">
          <TaxiMap taxiStands={taxiStands} />
        </Route>
        <Route path="/taxi/listview">
          <TaxiList taxiStands={taxiStands} />
        </Route>
      </Switch>
    </div>
  );
};

export default Taxi;
