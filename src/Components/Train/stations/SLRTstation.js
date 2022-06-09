import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import API from "../API";

const SLRTstation = () => {
  const [SLRT, setSLRT] = useState([]);

  const listSLRT = async () => {
    const { data } = await API.get("/PCDRealTime", {
      params: { TrainLine: "SLRT" },
    });
    setSLRT(data.value);
    console.log(data.value);
    // console.log(data.value);
  };

  useEffect(() => {
    listSLRT();
  }, []);

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {SLRT.map((o) => {
            return (
              <tr key={nanoid}>
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

export default SLRTstation;
