  import React, { useState, useEffect } from "react";
  import API from "../API";
  import mrtdata from "../data/TrainStation.json";
  import { nanoid } from "nanoid";
  
  const CCLstation = () => {
    const [CCL, setCCL] = useState([]);
    const [CEL, setCEL] = useState([]);
  
    const listCCL = async () => {
      const { data } = await API.get("/PCDRealTime", {
        params: { TrainLine: "CCL" },
      });
      setCCL(data.value);
      console.log(data.value);
    };
    const listCEL = async () => {
      const { data } = await API.get("/PCDRealTime", {
        params: { TrainLine: "CEL" },
      });
      setCEL(data.value);
      // console.log(data.value);
    };
  
    useEffect(() => {
      listCCL();
      listCEL();
    }, []);

    const CCLcombined = [...CCL, ...CEL]
  
    // Combining GEOJSON and LTA Data
    const geodata = mrtdata.features;
    geodata.forEach(element => {
      element.properties.LTA = ""
    });
    let sortedgeodata = []
    for (let i = 0; i < geodata.length; i++) {
      for (let j = 0; j < CCLcombined.length; j++) {
        if (geodata[i].properties.STN_NO === CCLcombined[j].Station) {
          sortedgeodata.push(geodata[i]);
          const datalength = sortedgeodata.length - 1
          sortedgeodata[datalength].properties.LTA = CCLcombined[j].CrowdLevel;
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
  
  export default CCLstation;
  
