import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import TrainMap from "./TrainMap";
import TrainList from "./TrainList";

function Train({ isListView }) {
  const [selectedValue, setSelectedValue] = useState("CCL");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <div>
        <label> Select your area:</label>
        <select value={selectedValue} onChange={handleChange}>
          {isListView ? null : <option value="ALL">All Stations</option>}
          <option value="CCL">CCL (for Circle Line)</option>
          <option value="DTL">DTL (for Downtown Line)</option>
          <option value="EWL">EWL (for East West Line)</option>
          <option value="NEL">NEL (for North East Line)</option>
          <option value="NSL">NSL (for North South Line)</option>
          <option value="BPL">BPL (for Bukit Panjang LRT)</option>
          <option value="SLRT">SLRT (for Sengkang LRT)</option>
          <option value="PLRT">PLRT (for Punggol LRT)</option>
        </select>
      </div>
      {isListView ? (
        <TrainList selectedValue={selectedValue} />
      ) : (
        <TrainMap selectedValue={selectedValue} />
      )}
    </>
  );
}

export default Train;
