import React, { useState, useEffect } from "react";
import NOMINATIMAPI from "../API/NOMINATIMAPI";
const SearchForm = ({
  setSearchParam,
  setCoordinatesParam,
  searchText,
  resetSearch,
}) => {
  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await NOMINATIMAPI.get("/search", {
          params: {
            q: searchText,
            format: "json",
            addressdetails: 1,
            limit: 1,
          },
        });
        const [{ lat, lon }] = response.data;
        setCoordinatesParam([parseFloat(lat), parseFloat(lon)]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetSearch();
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        placeholder="Search TaxiStands.."
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SearchForm;
