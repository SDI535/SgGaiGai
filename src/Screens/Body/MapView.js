import React from "react";
import Taxi from "../../Components/Taxi/Taxi";
import Bus from "../../Components/Bus/Bus";
import Car from "../../Components/Car/Car";

const MapView = (props) => {
  const { tabId } = props;
  const [isListView] = React.useState(false);
  switch (tabId) {
    case "Taxi":
      return <Taxi isListView={isListView} />;
      break;
    case "Car":
      return <div>Car Map</div>;
      break;
    case "Train":
      return <div>Train Map</div>;
      break;
    case "Bus":
      return <Bus isListView={isListView} />;
  }
};

export default MapView;
