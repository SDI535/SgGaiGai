import React, { useState, useEffect } from "react";
import API from "../API"

const DTLstation = () => {
    const [DTL, setDTL] = useState([]);

    const listDTL = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "DTL" } });
        setDTL(data.value);
        // console.log(data.value);
    };

    useEffect(() => {
        listDTL()
    }, []);

    return (
        <>
            <ul>
                {DTL.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
            </ul>
        </>
    )
}

export default DTLstation;