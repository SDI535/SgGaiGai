import React from "react";
import Taxi from "../../Components/Taxi/Taxi";
import Bus from "../../Components/Bus/Bus";
import Car from "../../Components/Car/Car";

const ListView = (props) => {
  const { tabId } = props;
  const [isListView] = React.useState(true);
  switch (tabId) {
    case "Taxi":
      return <Taxi isListView={isListView} />;
      break;
    case "Car":
      return <div>Car List</div>;
      break;
    case "Train":
      return <div>Train List</div>;
      break;
    case "Bus":
      return <Bus isListView={isListView} />;
  }
};

export default ListView;
