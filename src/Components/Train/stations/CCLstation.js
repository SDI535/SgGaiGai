import React, { useState, useEffect } from "react";
import API from "../API";

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

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {CCL.map((o) => {
            return (
              <tr key={o.Station}>
                <td>{o.Station}</td>
                <td>{o.CrowdLevel}</td>
              </tr>
            );
          })}
          {CEL.map((o) => {
            return (
              <tr key={o.Station}>
                <td>{o.Station}</td>
                <td>{o.CrowdLevel}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CCLstation;
