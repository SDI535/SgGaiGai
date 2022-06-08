import React, { useState, useEffect } from "react";

const BusList = (props) => {
  const [busStops, setBusStops] = useState([]);

  useEffect(() => {
    const changeData = () => {
      const list = props.data.map((x) => ({
        busStopCode: x.BusStopCode,
        description: x.Description,
        roadName: x.RoadName,
      }));
      setBusStops(list);
    };
    changeData();
  }, [busStops]);

  return (
    <div className="taxi-list">
      <table>
        <tbody>
          <tr>
            <th> Bus Stop Code </th>
            <th> Description </th>
            <th> Road Name </th>
          </tr>
          {busStops.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.busStopCode}</td>
                <td>{val.description}</td>
                <td>{val.roadName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BusList;
