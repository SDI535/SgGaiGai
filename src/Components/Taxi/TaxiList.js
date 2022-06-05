import React from "react";

const TaxiList = ({
  taxiStands,
  filteredTaxiStands,
  searchText,
  coordinates,
}) => {
  //create table rows for all taxi stands
  const allTaxiStandsElements = taxiStands.map((taxiStand) => {
    return (
      <tr key={taxiStand.TaxiCode}>
        <td>{taxiStand.Name}</td>
        <td>{taxiStand.TaxiCode}</td>
      </tr>
    );
  });

  //create table rows for filtered taxi stands (if any)
  const searchTaxiStandsElements = filteredTaxiStands.map((taxiStand) => {
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
      <tbody>
        {coordinates ? searchTaxiStandsElements : allTaxiStandsElements}
      </tbody>
    </table>
  );
};

export default TaxiList;
