import React, { useState, useEffect } from "react";
import API from "../API"

const SLRTstation = () => {
    const [SLRT, setSLRT] = useState([]);

    const listSLRT = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "SLRT" } });
        setSLRT(data.value);
        // console.log(data.value);
    };

    useEffect(() => {
        listSLRT()
    }, []);

    return (
        <>
            <ul>
                {SLRT.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
            </ul>
        </>
    )
}

export default SLRTstation;