import React, { useState, useEffect } from "react";
import API from "../API"

const PLRTstation = () => {
    const [PLRT, setPLRT] = useState([]);

    const listPLRT = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "PLRT" } });
        setPLRT(data.value);
        // console.log(data.value);
    };

    useEffect(() => {
        listPLRT()
    }, []);

    return (
        <>
            <ul>
                {PLRT.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
            </ul>
        </>
    )
}

export default PLRTstation;