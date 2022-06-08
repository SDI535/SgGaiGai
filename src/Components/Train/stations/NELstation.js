import React, { useState, useEffect } from "react";
import API from "../API"

const NELstation = () => {
    const [NEL, setNEL] = useState([]);

    const listNEL = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "NEL" } });
        setNEL(data.value);
        // console.log(data.value);
    };

    useEffect(() => {
        listNEL()
    }, []);

    return (
        <>
            <ul>
                {NEL.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
            </ul>
        </>
    )
}

export default NELstation;