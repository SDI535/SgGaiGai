import React, { useState, useEffect } from "react";
import API from "../API";

const PLRTstation = () => {
  const [PLRT, setPLRT] = useState([]);

  const listPLRT = async () => {
    const { data } = await API.get("/PCDRealTime", {
      params: { TrainLine: "PLRT" },
    });
    setPLRT(data.value);
    // console.log(data.value);
  };

  useEffect(() => {
    listPLRT();
  }, []);

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {PLRT.map((o) => {
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

export default PLRTstation;
