import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./taxi.css";

const TaxiMap = (props) => {
  const defaultCenter = [1.3521, 103.8198];
  const defaultZoom = 12;
  const { taxiStands } = props;
  const taxiStandsElements = taxiStands.map((taxiStand) => {
    return (
      <Marker
        key={taxiStand.TaxiCode}
        position={[taxiStand.Latitude, taxiStand.Longitude]}
      >
        <Popup>
          <div>
            <h2>{taxiStand.TaxiCode}</h2>
            <p>{taxiStand.Name}</p>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <div className="leaflet-container">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {taxiStandsElements}
      </MapContainer>
    </div>
  );
};

export default TaxiMap;
