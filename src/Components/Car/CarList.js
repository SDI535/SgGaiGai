import React from "react";

const CarList = ({
    carparkList,
    filteredCarparkList,
}) => {
    const fullCarparkList = carparkList.map((carparkList,key) => {
        return (
            <tr key={key}>
                <td>{carparkList.Development}</td>
                <td>{carparkList.AvailableLots}</td>
            </tr>
        )
    })

    return (
        <>
        <h3>Full Carpark List</h3>
        <table>
            <tbody>
            <tr>
                <th>Location</th>
                <th>Available Lots</th>
            </tr>
                {fullCarparkList}
            </tbody>
        </table>
        </>
    )
}

export default CarList;