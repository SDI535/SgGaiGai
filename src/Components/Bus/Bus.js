//Bus.js file toggles between the different views for buses
import React, { useState, useEffect } from "react";
import LTAAPI from "../API/LTAAPI";
import BusList from "./BusList";
import BusMap from "./BusMap";

const Bus = ({ isListView }) => {
  const LOCAL_STORAGE_SELECTED_BUS_AREA_KEY = "selected.BusArea";
  const [selectedValue, setSelectedValue] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_BUS_AREA_KEY)) || 0
  );
  const [busStops, setBusStops] = useState([]);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  // useEffect(() => {
  //   setSelectedValue(0);
  //   console.log("selected value is updated at the start");
  // }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_SELECTED_BUS_AREA_KEY,
      JSON.stringify(selectedValue)
    );
  }, [selectedValue]);

  useEffect(() => {
    async function fetchData() {
      const response = await LTAAPI.get(`/BusStops?$skip=${selectedValue}`);
      setBusStops(response.data.value);
      console.log(response);
      setCount(count + 1);
      console.log("count at start", count);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await LTAAPI.get(`/BusStops?$skip=${selectedValue}`);
      setBusStops(response.data.value);
      console.log(response);
      setCount(count + 1);
      console.log("count after dropdown change", count);
    }
    fetchData();
  }, [selectedValue]);

  return (
    <>
      <div>
        <label id="selectTitle"> Select your area:</label>
        <select id="selector" value={selectedValue} onChange={handleChange}>
          <option value="0">
            Central District, Downtown Core, Bukit Merah, Queenstown
          </option>
          <option value="500">
            Sentosa, Telok Bangah, Alexndar, Pasir Panjang
          </option>
          <option value="1000">Boon Lay, Pioneer, Jurong Island</option>
          <option value="1500">
            Tengah, Hillview, Lim Chu Kang, Bukit Timah
          </option>
          <option value="2000">
            Woodlands, Admiralty, Choa Chu Kang, Bukit Panjang{" "}
          </option>
          <option value="2500">
            Sungei Kadut, Mandai, Thomson, Ang Mo Kio, Marymount, Braddell,
            Whampoa
          </option>
          <option value="3000">Yishun, Katib, Lentor, Serangoon</option>
          <option value="3500">
            Punggol, Sengkang, Hougang, Serangoon Gardens
          </option>
          <option value="4000">
            Pasir-Ris, Tampines, Payar Lebar, Geylang
          </option>
          <option value="4500">
            Changi, Bedok, Marine Parade, East Coast, Tanjong Katong
          </option>
          <option value="5000">Changi</option>
        </select>
      </div>
      {isListView ? (
        <BusList data={busStops} count={count} />
      ) : (
        <BusMap data={busStops} selectedValue={selectedValue} count={count} />
      )}
    </>
  );
};

export default Bus;
