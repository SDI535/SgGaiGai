import React, {useState, useEffect} from "react";
import LTAAPI from "../API/LTAAPI";
import CarList from "./CarList";
import CarMap from "./CarMap";
//import SearchCarpark from "./SearchCarpark";

const Car = () => {
    const [carparkList, setCarParkList] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await LTAAPI.get("/CarParkAvailabilityv2");
                setCarParkList(response.data.value);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <div>
        <h1>Carpark Availability</h1>
        <CarList  carparkList={carparkList}/>
        <CarMap data={carparkList}/>
        </div>
        </>
    )
}

export default Car;