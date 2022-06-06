import React, { useState, useEffect } from "react";
import LTAAPI from "../API/LTAAPI";
import { Switch, Route, NavLink } from "react-router-dom";
import TaxiList from "./TaxiList";
import TaxiMap from "./TaxiMap";
import SearchForm from "./SearchForm";

const Taxi = () => {
  const [taxiStands, setTaxiStands] = useState([]);
  const [availableTaxis, setAvailableTaxis] = useState([]);
  const [availableTaxisCount, setAvailableTaxisCount] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [filteredTaxiStands, setFilteredTaxiStands] = useState([]);

  // fetch taxi stands from LTA API
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

  // fetch taxi available from LTA API
  useEffect(() => {
    const fetchAvailableTaxis = async () => {
      try {
        const response = await LTAAPI.get("/Taxi-Availability");
        setAvailableTaxis(response.data.value);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAvailableTaxis();
  }, []);

  // set search param from search form
  const setSearchParam = (params) => {
    setSearchText(params);
  };

  // set coordinates param through nomatim api in searchform
  const setCoordinatesParam = (coordinates) => {
    setCoordinates(coordinates);
  };

  // reset to see all taxi stands
  const resetSearch = () => {
    setCoordinates(null);
    setSearchText("");
    setAvailableTaxisCount([]);
  };

  //haversine formula in km
  const haversine = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = ((lat2 - lat1) * Math.PI) / 180; // deg2rad below
    var dLon = ((lon2 - lon1) * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  };

  // filter taxistand results by coordinates, nearest 2km using haversine formula
  useEffect(() => {
    if (coordinates) {
      let matches = [];
      taxiStands.forEach((taxiStand) => {
        const { Latitude, Longitude } = taxiStand;
        const distance = haversine(
          coordinates[0],
          coordinates[1],
          Latitude,
          Longitude
        );
        if (distance <= 2) {
          matches.push(taxiStand);
        }
      });
      setFilteredTaxiStands(matches);
    }
  }, [coordinates]);

  //count available taxis, nearest 2km to search Location using haversine formula
  useEffect(() => {
    if (coordinates) {
      const setNearbyTaxis = () => {
        let matches = [];
        availableTaxis.forEach((taxi) => {
          const { Latitude, Longitude } = taxi;
          const distance = haversine(
            coordinates[0],
            coordinates[1],
            Latitude,
            Longitude
          );
          if (distance <= 2) {
            matches.push(taxi);
          }
        });
        setAvailableTaxisCount(matches);
      };
      setNearbyTaxis();
    }
  }, [coordinates]);

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
        <SearchForm
          setSearchParam={setSearchParam}
          setCoordinatesParam={setCoordinatesParam}
          resetSearch={resetSearch}
          searchText={searchText}
        />
      </div>
      <Switch>
        <Route exact path="/taxi/mapview">
          <TaxiMap
            taxiStands={taxiStands}
            filteredTaxiStands={filteredTaxiStands}
            availableTaxisCount={availableTaxisCount}
            coordinates={coordinates}
          />
        </Route>
        <Route path="/taxi/listview">
          <TaxiList
            taxiStands={taxiStands}
            filteredTaxiStands={filteredTaxiStands}
            availableTaxisCount={availableTaxisCount}
            coordinates={coordinates}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Taxi;
