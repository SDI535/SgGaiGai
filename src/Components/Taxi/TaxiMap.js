import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./taxi.css";

const TaxiMap = ({
  taxiStands,
  filteredTaxiStands,
  searchText,
  coordinates,
}) => {
  const [mapCenter, setMapCenter] = useState([1.3521, 103.8198]);
  const [defaultZoom, setDefaultZoom] = useState(12);

  // create markers for all taxi stands
  const allTaxiStandsElements = taxiStands.map((taxiStand) => {
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

  // create markers for filtered taxi stands (if any)
  const searchTaxiStandsElements = filteredTaxiStands.map((taxiStand) => {
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

  // set map center to coordinates if available

  return (
    <div className="leaflet-container">
      <MapContainer
        center={mapCenter}
        zoom={defaultZoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates ? searchTaxiStandsElements : allTaxiStandsElements}
      </MapContainer>
    </div>
  );
};

export default TaxiMap;
