import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import LTAAPI from "../../API/LTAAPI";
import mrtdata from "../data/TrainStation.json";

const NSLstation = () => {
  const [NSL, setNSL] = useState([]);
  const listNSL = async () => {
    const { data } = await LTAAPI.get("/PCDRealTime", {
      params: { TrainLine: "NSL" },
    });
    setNSL(data.value);
    // console.log(data.value);
  };
  useEffect(() => {
    listNSL();
  }, []);
  console.log(NSL);

  // Combining GEOJSON and LTA Data
  const geodata = mrtdata.features;
  geodata.forEach(element => {
    element.properties.LTA = ""
  });
  let sortedgeodata = []
  for (let i = 0; i < geodata.length; i++) {
    for (let j = 0; j < NSL.length; j++) {
      if (geodata[i].properties.STN_NO === NSL[j].Station) {
        sortedgeodata.push(geodata[i]);
        const datalength = sortedgeodata.length - 1
        sortedgeodata[datalength].properties.LTA = NSL[j].CrowdLevel;
      }
    }
  }
  // console.log("checkNSL", sortedgeodata)

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

export default NSLstation;
