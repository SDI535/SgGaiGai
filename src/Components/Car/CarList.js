import React from "react";

const CarList = ({ carparkList }) => {
  const fullCarparkList = carparkList.map((carparkList, carparkLists) => {
    return (
      <tr key={carparkLists}>
        <td>{carparkList.Development}</td>
        <td>{carparkList.AvailableLots}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="taxi-list">
        <table>
          <tbody>
            <tr>
              <th>Location</th>
              <th>Available Lots</th>
            </tr>
            {fullCarparkList}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarList;
