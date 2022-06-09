import React, { useState, useEffect } from "react";
import API from "../API";
import mrtdata from "../data/TrainStation.json";

const BPLstation = () => {
  const [BPL, setBPL] = useState([]);
  const listBPL = async () => {
    const { data } = await API.get("/PCDRealTime", {
      params: { TrainLine: "BPL" },
    });
    setBPL(data.value);
    // console.log(data.value);
  };
  useEffect(() => {
    listBPL();
  }, []);
console.log(BPL);

  // Combining GEOJSON and LTA Data
  const geodata = mrtdata.features;
  geodata.forEach(element => {
    element.properties.LTA = ""
  });
  let sortedgeodata = []
  for (let i = 0; i < geodata.length; i++) {
    for (let j = 0; j < BPL.length; j++) {
      if (geodata[i].properties.STN_NO === BPL[j].Station) {
        sortedgeodata.push(geodata[i]);
        const datalength = sortedgeodata.length - 1
        sortedgeodata[datalength].properties.LTA = BPL[j].CrowdLevel;
      }
    }
  }
  // console.log("checkBPL", sortedgeodata)

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Name </th>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {sortedgeodata.map((o) => {
            return (
              <tr key={o.properties.STN_NO}>
                <td>{o.properties.STN_NAME}</td>
                <td>{o.properties.STN_NO}</td>
                <td>{o.properties.LTA}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BPLstation;
