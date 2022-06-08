import React from "react";
import CCLstation from "./stations/CCLstation";
import DTLstation from "./stations/DTLstation";
import EWLstation from "./stations/EWLstation";
import NELstation from "./stations/NELstation";
import NSLstation from "./stations/NSLstation";
import BPLstation from "./stations/BPLstation";
import SLRTstation from "./stations/SLRTstation";
import PLRTstation from "./stations/PLRTstation";

const TrainList = ({ selectedValue }) => {
  switch (selectedValue) {
    case "CCL":
      return <CCLstation />;
      break;
    case "DTL":
      return <DTLstation />;
      break;
    case "EWL":
      return <EWLstation />;
      break;
    case "NEL":
      return <NELstation />;
      break;
    case "NSL":
      return <NSLstation />;
      break;
    case "BPL":
      return <BPLstation />;
      break;
    case "SLRT":
      return <SLRTstation />;
      break;
    case "PLRT":
      return <PLRTstation />;
      break;
  }
};

export default TrainList;
