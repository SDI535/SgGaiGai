import React, { useState, useEffect } from "react";
import API from "../API";

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

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {CGL.map((o) => {
            return (
              <tr key={o.Station}>
                <td>{o.Station}</td>
                <td>{o.CrowdLevel}</td>
              </tr>
            );
          })}
          {EWL.map((o) => {
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

export default EWLstation;
