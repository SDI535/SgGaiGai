import React, {useRef, useEffect, useState} from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./car.css"

const CarMap = (props) => {

    const carparkElements = props.data.map((x) => {
        const coordinates = x.Location.split(" ")
        const latitude = parseFloat(coordinates[0]);
        const longitude = parseFloat(coordinates[1]);

        return(
            <Marker
            key={x.CarParkID}
            position={[latitude, longitude]}
            >
        <Popup>
          <div>
            <h3>{x.Development}</h3>
            <p>Available Lots: {x.AvailableLots}</p>
          </div>
        </Popup>
      </Marker>
        )
    })

    return (
        <div className="leaflet-container">
            <MapContainer center={[1.3521, 103.8198]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {carparkElements}
            </MapContainer>
            
        </div>
    )
}

export default CarMap;