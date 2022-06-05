import React from "react";

const TaxiList = (props) => {
  const { taxiStands } = props;
  const taxiStandsElements = taxiStands.map((taxiStand) => {
    return (
      <tr key={taxiStand.TaxiCode}>
        <td>{taxiStand.Name}</td>
        <td>{taxiStand.TaxiCode}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Taxi Code</th>
        </tr>
      </thead>
      <tbody>{taxiStandsElements}</tbody>
    </table>
  );
};

export default TaxiList;
