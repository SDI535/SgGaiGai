import React, { useState, useEffect } from "react";
import API from "../API";
import { nanoid } from "nanoid";

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

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {BPL.map((o) => {
            return (
              <tr key={nanoid()}>
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

export default BPLstation;
