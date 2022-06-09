import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import API from "../API";

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

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {NEL.map((o) => {
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

export default NELstation;
