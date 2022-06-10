import { click } from "@testing-library/user-event/dist/click";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./Bus.css";

const BusMap = (props) => {
  const [busStopLocation, setBusStopLocation] = useState([]);
  const [counting, setCounting] = useState(0);

  const selectedValue = props.selectedValue;
  const center = [1.3521, 103.8198];
  const count = props.count;

  console.log("selectedValue", selectedValue);

  useEffect(() => {
    const checkCount = () => {
      if (counting != count) {
        setCounting(count);
      }
      console.log(count, counting);
    };
    checkCount();
  });

  useEffect(() => {
    const changeData = () => {
      const list = props.data.map((x) => ({
        latitude: x.Latitude,
        longitude: x.Longitude,
        description: x.Description,
        busStopCode: x.BusStopCode,
        roadName: x.RoadName,
      }));
      setBusStopLocation(list);
      // console.log("I am triggered", count, counting);
    };
    changeData();
  }, [counting]);

  useEffect(() => {
    // console.log("I should be triggered next", count, counting);
    UpdateMarker();
  }, [counting]);

  const UpdateMarker = () => {
    return (
      <div>
        {busStopLocation.map((y, idx) => {
          console.log("this runs", count, counting);
          return (
            <Marker position={[y.latitude, y.longitude]} key={idx}>
              <Popup>
                Code: {y.busStopCode} <br></br>
                Description: {y.description} <br></br>
                Road Name: {y.roadName}
              </Popup>
            </Marker>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="leaflet-container">
        <MapContainer center={center} zoom={11} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <UpdateMarker />
        </MapContainer>
      </div>
    </>
  );
};

export default BusMap;
