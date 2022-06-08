import React, { useState, useEffect } from "react";
import API from "../API"

const BPLstation = () => {
    const [BPL, setBPL] = useState([]);

    const listBPL = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "BPL" } });
        setBPL(data.value);
        // console.log(data.value);
    };

    useEffect(() => {
        listBPL()
    }, []);

    return (
        <>
            <ul>
                {BPL.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
            </ul>
        </>
    )
}

export default BPLstation;