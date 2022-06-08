import React, { useState, useEffect } from "react";
import API from "../API"

const NSLstation = () => {
    const [NSL, setNSL] = useState([]);

    const listNSL = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "NSL" } });
        setNSL(data.value);
        // console.log(data.value);
    };

    useEffect(() => {
        listNSL()
    }, []);

    return (
        <>
            <ul>
                {NSL.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
            </ul>
        </>
    )
}

export default NSLstation;