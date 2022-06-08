import { click } from "@testing-library/user-event/dist/click";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./Bus.css";

const BusMap = (props) => {

    const [busStopLocation, setBusStopLocation] = useState([]);

    const center = [1.3521, 103.8198]

    useEffect(() => {
        const changeData = () => {
            const list = props.data.map((x) => (
                {
                    latitude: x.Latitude,
                    longitude: x.Longitude,
                    description: x.Description,
                    busStopCode: x.BusStopCode,
                    roadName: x.RoadName
                }
            ))
            setBusStopLocation(list);
        }
        changeData();
    }, []);


    return (
        <div className="leaflet-container">
            <MapContainer center={center} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {busStopLocation.map((y, idx) => {
                    return (
                        <Marker position={[y.latitude, y.longitude]} key={idx}>
                            <Popup> 
                                Code: {y.busStopCode} <br></br>
                                Description: {y.description} <br></br> 
                                Road Name: {y.roadName}
                                </Popup>
                        </Marker>
                    )
                })}
                
            </MapContainer>
        </div>
    )
}

export default BusMap