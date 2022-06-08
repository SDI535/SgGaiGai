import React, { useState, useEffect, useRef } from "react";
import { Map, MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import './App.css';
import mrtdata from "./data/TrainStation.json"
import axios from "axios";
import orangepin from "./data/orange.png";
import bluepin from "./data/blue.png";
import greenpin from "./data/green.png";
import greypin from "./data/grey.png";
import purplepin from "./data/purple.png";
import redpin from "./data/red.png";

function App() {

  //All Icons
  var orangeicon = L.icon({
    iconUrl: orangepin,
    iconSize: [25, 41],
    popupAnchor: [0, -28]
  });
  var redicon = L.icon({
    iconUrl: redpin,
    iconSize: [25, 41],
    popupAnchor: [0, -28]
  });
  var blueicon = L.icon({
    iconUrl: bluepin,
    iconSize: [25, 41],
    popupAnchor: [0, -28]
  });
  var greenicon = L.icon({
    iconUrl: greenpin,
    iconSize: [25, 41],
    popupAnchor: [0, -28]
  });
  var greyicon = L.icon({
    iconUrl: greypin,
    iconSize: [25, 41],
    popupAnchor: [0, -28]
  });
  var purpleicon = L.icon({
    iconUrl: purplepin,
    iconSize: [25, 41],
    popupAnchor: [0, -28]
  });

  //Filtered Data
  const geodata = mrtdata.features;
  const filteredCCL = geodata
    .filter(geodata => geodata.properties.STN_NO.match("CC"))
    .map(geodata => geodata);
  const filteredCEL = geodata
    .filter(geodata => geodata.properties.STN_NO.match("CE"))
    .map(geodata => geodata);
  const filteredCGL = geodata
    .filter(geodata => geodata.properties.STN_NO.match("CG"))
    .map(geodata => geodata);
  const filteredDTL = geodata
    .filter(geodata => geodata.properties.STN_NO.match("DT"))
    .map(geodata => geodata);
  const filteredEWL = geodata
    .filter(geodata => geodata.properties.STN_NO.match("EW"))
    .map(geodata => geodata);
  const filteredNEL = geodata
    .filter(geodata => geodata.properties.STN_NO.match("NE"))
    .map(geodata => geodata);
  const filteredNSL = geodata
    .filter(geodata => geodata.properties.STN_NO.match("NS"))
    .map(geodata => geodata);
  const filteredBPL = geodata
    .filter(geodata => geodata.properties.STN_NO.match("BP"))
    .map(geodata => geodata);
  const filteredSLRT1 = geodata
    .filter(geodata => geodata.properties.STN_NO.match("STC"))
    .map(geodata => geodata);
  const filteredSLRT2 = geodata
    .filter(geodata => geodata.properties.STN_NO.match("SW"))
    .map(geodata => geodata);
  const filteredSLRT3 = geodata
    .filter(geodata => geodata.properties.STN_NO.match("SE"))
    .map(geodata => geodata);
  const filteredPLRT1 = geodata
    .filter(geodata => geodata.properties.STN_NO.match("PTC"))
    .map(geodata => geodata);
  const filteredPLRT2 = geodata
    .filter(geodata => geodata.properties.STN_NO.match("PW"))
    .map(geodata => geodata);
  const filteredPLRT3 = geodata
    .filter(geodata => geodata.properties.STN_NO.match("PE"))
    .map(geodata => geodata);
  // console.log(filteredgeodata);

  //Pop-up Info  
  const onEachStation = (station, layer) => {
    const stationName = station.properties.STN_NAME;
    const stationNum = station.properties.STN_NO;
    layer.bindPopup(stationName + "<br>" + stationNum)
  }

  //Draw Map
  return (
    <MapContainer center={[1.215840, 103.815487]} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={filteredCCL}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: orangeicon }) }} />
      <GeoJSON data={filteredCEL}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: orangeicon }) }} />
      <GeoJSON data={filteredCGL}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greenicon }) }} />
      <GeoJSON data={filteredDTL}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: blueicon }) }} />
      <GeoJSON data={filteredEWL}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greenicon }) }} />
      <GeoJSON data={filteredNEL}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: purpleicon }) }} />
      <GeoJSON data={filteredNSL}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: redicon }) }} />
      <GeoJSON data={filteredBPL}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greyicon }) }} />
      <GeoJSON data={filteredSLRT1}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greyicon }) }} />
      <GeoJSON data={filteredSLRT2}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greyicon }) }} />
      <GeoJSON data={filteredSLRT3}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greyicon }) }} />
      <GeoJSON data={filteredPLRT1}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greyicon }) }} />
      <GeoJSON data={filteredPLRT2}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greyicon }) }} />
      <GeoJSON data={filteredPLRT3}
        onEachFeature={onEachStation}
        pointToLayer={function (feature, latlng) { return L.marker(latlng, { icon: greyicon }) }} />
    </MapContainer>
  );
}

export default App;
