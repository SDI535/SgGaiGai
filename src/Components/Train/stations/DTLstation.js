import React, { useState, useEffect } from "react";
import API from "../API";
import { nanoid } from "nanoid";

const DTLstation = () => {
  const [DTL, setDTL] = useState([]);

  const listDTL = async () => {
    const { data } = await API.get("/PCDRealTime", {
      params: { TrainLine: "DTL" },
    });
    setDTL(data.value);
    // console.log(data.value);
  };

  useEffect(() => {
    listDTL();
  }, []);

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Station Code </th>
            <th> Crowd Level </th>
          </tr>
          {DTL.map((o) => {
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

export default DTLstation;
