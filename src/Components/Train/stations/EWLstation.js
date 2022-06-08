import React, { useState, useEffect } from "react";
import API from "../API"

const EWLstation = () => {
    const [CGL, setCGL] = useState([]);
    const [EWL, setEWL] = useState([]);

    const listCGL = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "CGL" } });
        setCGL(data.value);
        // console.log(data.value);
    };
    const listEWL = async () => {
        const { data } = await API.get("/PCDRealTime", { params: { TrainLine: "EWL" } });
        setEWL(data.value);
        // console.log(data.value);
    };

    useEffect(() => {
        listCGL()
        listEWL()
    }, []);

    return (
        <>
            <ul>
                {CGL.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
                {EWL.map((o) => {
                    return <li>{o.Station} - {o.CrowdLevel}</li>;
                })}
            </ul>
        </>
    )
}

export default EWLstation;