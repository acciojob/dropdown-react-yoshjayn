import React,{useState, useEffect} from "react";
import {stateDescription, cityDescription, landmarkDescription} from "./data"


function Card({stateName, cityName, landName}){
    let stateValue = stateDescription(stateName).name;
    let stateDesc = stateDescription(stateName).description
  
let cityValue =cityDescription(stateName,cityName).name
let cityDesc = cityDescription(stateName,cityName).description

let landValue=landmarkDescription(stateName,cityName,landName).name
let landDesc=landmarkDescription(stateName,cityName,landName).description

return(
    <div>

        <div id="state-name"> {stateValue} </div>
      <div id="state-description"> {stateDesc}</div>

      <div id="city-name"> {cityValue}</div>
      <div id="city-description">{cityDesc} </div>

      <div id="landmark-name">{landValue} </div>
      <div id="landmark-description">{landDesc} </div>

</div>
    )
}

export default Card