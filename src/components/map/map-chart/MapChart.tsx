import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import chroma from "chroma-js";
import { useSelector } from "react-redux";



const MapChart = ({ setTooltipContent }) => {
  const data = useSelector((state:any)=> state.dataReducer.data);
  const dataValueChart = useSelector((state:any)=> state.dataReducer.valueChart);
  const isZoom = useSelector((state:any)=> state.dataReducer.isZoom);
  
  function getDarkenedColor() {
    // Convert the darkened color to RGB format
    const rgbColor = "#cbcbfd";
    return rgbColor;
  }
  
  const fillColor = (geo) => {
    const country = data.find((d) => d.name === geo.properties.name);
  
    if (country) {
      return getDarkenedColor();
    }
  
    return "#D6D6DA";
  };


  const renderMap = ()=>{
    return(
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo, index) => {
              if(data.findIndex((item:any)=> item.name === geo.properties.name) >= 0){
                return(
                  <a data-tooltip-id="my-tooltip"
                    data-tooltip-float="true" 
                    key={index}
                  >
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        let dataTemp = data.find((item:any)=> item.name === geo.properties.name);
                        if(data.findIndex((item:any)=> item.name === geo.properties.name) >= 0){
                          setTooltipContent(`
                            product: ${dataTemp.product} <br>
                            ${dataValueChart.title}: ${dataTemp[dataValueChart.value]}
                          `);
                        }
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: {
                          fill: fillColor(geo),
                          outline: "none"
                        },
                        hover: {
                          fill: "#0EA5E9",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  </a>
                )
              }else{
                return(
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: fillColor(geo),
                          outline: "none"
                        },
                        hover: {
                          fill: "#0EA5E9",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                )
              }
            }
          )
        }
      </Geographies>
    )
  }
  return (
      <ComposableMap>
        {
          isZoom ?
          <ZoomableGroup>
            {
              renderMap()
            }
          </ZoomableGroup>
          :
          renderMap()
        }   
      </ComposableMap>
  );
};

export default memo(MapChart);
