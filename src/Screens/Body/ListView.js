import React from "react";
import Taxi from "../../Components/Taxi/Taxi";
import Bus from "../../Components/Bus/Bus";
import Car from "../../Components/Car/Car";
import Train from "../../Components/Train/Train";

const ListView = (props) => {
  const { tabId } = props;
  const [isListView] = React.useState(true);
  switch (tabId) {
    case "Taxi":
      return <Taxi isListView={isListView} />;
      break;
    case "Car":
      return <Car isListView={isListView} />;
      break;
    case "Train":
      return <Train isListView={isListView} />;
      break;
    case "Bus":
      return <Bus isListView={isListView} />;
      break;
  }
};

export default ListView;
