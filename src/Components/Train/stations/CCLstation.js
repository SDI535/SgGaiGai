import React, { useState, useEffect } from "react";
import API from "../API"

const CCLstation = () => {
    const [CCL, setCCL] = useState([]);
    const [CEL, setCEL] = useState([]);

    const listCCL = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "CCL" } });
        setCCL(data.value);
        console.log(data.value);
    };
    const listCEL = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "CEL" } });
        setCEL(data.value);
        // console.log(data.value);
    };

    useEffect(() => {
        listCCL()
        listCEL()
    }, []);

    return (
        <>
            <ul>
                {CCL.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
                {CEL.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
            </ul>
        </>
    )
}

export default CCLstation;