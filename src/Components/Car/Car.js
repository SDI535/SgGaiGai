import React, { useState, useEffect } from "react";
import LTAAPI from "../API/LTAAPI";
import CarList from "./CarList";
import CarMap from "./CarMap";
//import SearchCarpark from "./SearchCarpark";

const Car = ({ isListView }) => {
  const [carparkList, setCarParkList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await LTAAPI.get("/CarParkAvailabilityv2");
        setCarParkList(response.data.value);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isListView ? (
        <CarList carparkList={carparkList} />
      ) : (
        <CarMap data={carparkList} />
      )}
    </>
  );
};

export default Car;
