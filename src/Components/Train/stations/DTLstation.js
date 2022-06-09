import React, { useState, useEffect } from "react";
import LTAAPI from "../../API/LTAAPI";
import mrtdata from "../data/TrainStation.json";
import { nanoid } from "nanoid";

const DTLstation = () => {
  const [DTL, setDTL] = useState([]);
  const listDTL = async () => {
    const { data } = await LTAAPI.get("/PCDRealTime", {
      params: { TrainLine: "DTL" },
    });
    setDTL(data.value);
    // console.log(data.value);
  };
  useEffect(() => {
    listDTL();
  }, []);
  console.log(DTL);

  // Combining GEOJSON and LTA Data
  const geodata = mrtdata.features;
  geodata.forEach(element => {
    element.properties.LTA = ""
  });
  let sortedgeodata = []
  for (let i = 0; i < geodata.length; i++) {
    for (let j = 0; j < DTL.length; j++) {
      if (geodata[i].properties.STN_NO === DTL[j].Station) {
        sortedgeodata.push(geodata[i]);
        const datalength = sortedgeodata.length - 1
        sortedgeodata[datalength].properties.LTA = DTL[j].CrowdLevel;
      }
    }
  }
  // console.log("checkDTL", sortedgeodata)

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

export default DTLstation;
