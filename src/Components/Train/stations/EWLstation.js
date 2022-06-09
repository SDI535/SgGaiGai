
import React, { useState, useEffect } from "react";
import API from "../API";
import mrtdata from "../data/TrainStation.json";
import { nanoid } from "nanoid";

const EWLstation = () => {
  const [CGL, setCGL] = useState([]);
  const [EWL, setEWL] = useState([]);

  const listCGL = async () => {
    const { data } = await API.get("/PCDRealTime", {
      params: { TrainLine: "CGL" },
    });
    setCGL(data.value);
    // console.log(data.value);
  };
  const listEWL = async () => {
    const { data } = await API.get("/PCDRealTime", {
      params: { TrainLine: "EWL" },
    });
    setEWL(data.value);
    // console.log(data.value);
  };

  useEffect(() => {
    listCGL();
    listEWL();
  }, []);

  const EWLcombined = [...CGL, ...EWL]

  // Combining GEOJSON and LTA Data
  const geodata = mrtdata.features;
  geodata.forEach(element => {
    element.properties.LTA = ""
  });
  let sortedgeodata = []
  for (let i = 0; i < geodata.length; i++) {
    for (let j = 0; j < EWLcombined.length; j++) {
      if (geodata[i].properties.STN_NO === EWLcombined[j].Station) {
        sortedgeodata.push(geodata[i]);
        const datalength = sortedgeodata.length - 1
        sortedgeodata[datalength].properties.LTA = EWLcombined[j].CrowdLevel;
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

export default EWLstation;

