import React, { useState } from "react";
import './MapComponent.scss';

import MapChart from "./map-chart/MapChart.tsx";
import {Tooltip} from 'react-tooltip'

const MapComponent = () => {
  const [content, setContent] = useState("");
  return (
    <div>
        <MapChart setTooltipContent={setContent} />
        
        <Tooltip id="my-tooltip">
          <div dangerouslySetInnerHTML={{ __html: content }} style={{width: "100%", textAlign:"left"}}></div>
        </Tooltip>
    </div>
  );
}

export default MapComponent;
