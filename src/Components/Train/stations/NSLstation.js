import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import API from "../API";

const NSLstation = () => {
  const [NSL, setNSL] = useState([]);

  const listNSL = async () => {
    const { data } = await API.get("/PCDRealTime", {
      params: { TrainLine: "NSL" },
    });
    setNSL(data.value);
    // console.log(data.value);
  };

  useEffect(() => {
    listNSL();
  }, []);

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {NSL.map((o) => {
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

export default NSLstation;
