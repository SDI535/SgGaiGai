import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./taxi.css";
import pin from "./Static/Icons/pin.png";
import taxiIcon from "./Static/Icons/taxi.png";
import taxiStop from "./Static/Icons/taxi-stop.png";

const TaxiMap = ({
  taxiStands,
  filteredTaxiStands,
  coordinates,
  availableTaxisCount,
}) => {
  const [mapCenter, setMapCenter] = useState([1.3521, 103.8198]);
  const [defaultZoom, setDefaultZoom] = useState(12);
  const mapRef = useRef();

  //custom marker
  const GetIcon = (_iconUrl, _iconSize) => {
    return L.icon({
      iconUrl: _iconUrl,
      iconSize: _iconSize,
    });
  };

  // create markers for all taxi stands
  const allTaxiStandsElements = taxiStands.map((taxiStand) => {
    return (
      <Marker
        key={taxiStand.TaxiCode}
        position={[taxiStand.Latitude, taxiStand.Longitude]}
        icon={GetIcon(taxiStop, [32, 32])}
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
  const filteredTaxiStandsElements = filteredTaxiStands.map((taxiStand) => {
    return (
      <Marker
        key={taxiStand.TaxiCode}
        position={[taxiStand.Latitude, taxiStand.Longitude]}
        icon={GetIcon(taxiStop, [32, 32])}
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

  // create markers for nearby available taxis (if any)
  const availableNearbyTaxisElements = availableTaxisCount.map((taxi) => {
    return (
      <Marker
        key={taxi.Latitude}
        position={[taxi.Latitude, taxi.Longitude]}
        icon={GetIcon(taxiIcon, [32, 32])}
      ></Marker>
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
        {coordinates && (
          <Marker position={coordinates} icon={GetIcon(pin, [32, 32])}></Marker>
        )}
        {coordinates ? filteredTaxiStandsElements : allTaxiStandsElements}
        {availableTaxisCount.length > 0 ? availableNearbyTaxisElements : null}
      </MapContainer>
    </div>
  );
};

export default TaxiMap;
