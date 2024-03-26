import React, { useState } from "react";
import './MapComponent.scss';

import MapChart from "./map-chart/MapChart.tsx";
import {Tooltip} from 'react-tooltip'
import { ZoomInOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleZoom } from "../../actions/data.action.tsx";

const MapComponent = () => {
  const [content, setContent] = useState("");
  const isZoom = useSelector((state:any)=> state.dataReducer.isZoom);
  const dispatch = useDispatch();

  return (
    <div className="map-element">
        <div className="tools-box">
          <ZoomInOutlined 
            onClick={()=>dispatch(toggleZoom(!isZoom))}
            className={`icon ${isZoom ? "active" : ""}`}
          />
        </div>
        <MapChart setTooltipContent={setContent} />
        
        <Tooltip id="my-tooltip">
          <div dangerouslySetInnerHTML={{ __html: content }} style={{width: "100%", textAlign:"left"}}></div>
        </Tooltip>
    </div>
  );
}

export default MapComponent;
