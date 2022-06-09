import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import API from "../API";
import mrtdata from "../data/TrainStation.json";

const NELstation = () => {
  const [NEL, setNEL] = useState([]);
  const listNEL = async () => {
    const { data } = await API.get("/PCDRealTime", {
      params: { TrainLine: "NEL" },
    });
    setNEL(data.value);
    // console.log(data.value);
  };
  useEffect(() => {
    listNEL();
  }, []);
  console.log(NEL);

  // Combining GEOJSON and LTA Data
  const geodata = mrtdata.features;
  geodata.forEach(element => {
    element.properties.LTA = ""
  });
  let sortedgeodata = []
  for (let i = 0; i < geodata.length; i++) {
    for (let j = 0; j < NEL.length; j++) {
      if (geodata[i].properties.STN_NO === NEL[j].Station) {
        sortedgeodata.push(geodata[i]);
        const datalength = sortedgeodata.length - 1
        sortedgeodata[datalength].properties.LTA = NEL[j].CrowdLevel;
      }
    }
  }
  // console.log("checkNEL", sortedgeodata)

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
              <tr key={nanoid()}>
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

export default NELstation;
