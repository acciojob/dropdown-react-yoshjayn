import React,{useState, useEffect} from "react";
import "./../styles/App.css";
import { state,city,landmark } from "./data";
// import {stateDescription, cityDescription, landmarkDescription} from "./data"
import Card from "./Card";
import CardOld from "./CardOld";
let allStates = state()

function App() {
	const [currentState, setCurrentState] = useState("Madhya Pradesh");
	const [cityList, setCityList] = useState(()=>city("Madhya Pradesh"));
	const [currentCity, setCurrentCity] = useState("Indore");
	const [landmarkList, setLandmarkList] = useState(()=>landmark("Madhya Pradesh", "Indore"));
	const [currentLandmark, setCurrentLandmark] = useState("Indore");

	// const [aboutState, setAboutState] = useState(()=>stateDescription(currentState).description);
	// const [aboutCity, setAboutCity] = useState(()=>cityDescription(currentState,currentCity).description)
	// const [aboutLandmark, setAboutLandmark] = useState(()=>LandmarkDescription(currentState).description)


	useEffect(()=>{
		let x =  city(currentState)
		setCityList(x)
		// console.log(cityList)
		setCurrentCity(x[0])
		// setAboutState(stateDescription(currentState).description)
	}, [currentState])

	useEffect(()=>{
		setLandmarkList(landmark(currentState, currentCity))
	},[currentCity])
	
	
	return (
		<div id="main">

		  <select id="state"  onChange={(e)=>setCurrentState(e.target.value)}>
		  {/* Each option tag within the select tags should have a value attribute corresponding to its index in the array (e.g., 0, 1, 2, ...).		   */}
		  {allStates.map(state=>(
					<option key={state} value={state}>{state}</option>
				))
				}
		  </select>
	
		  <select id="city" onChange={(e)=> setCurrentCity(e.target.value)}>
		  {
				cityList.map(city=>(
					<option key={city} value={city}>{city}</option>
				))
			}
		  </select>
	
		  <select id="landmark" onChange={(e)=> setCurrentLandmark(e.target.value)}>
		  {
				landmarkList.map(landmark=>(
					<option key={landmark} value={landmark}>{landmark}</option>
				))
			}
		  </select>
	
		  {/* Display Selected Items */}
		  {/* <div id="state-name"> {aboutState} </div>
		  <div id="state-description"> </div>
	
		  <div id="city-name"> </div>
		  <div id="city-description"> </div>
	
		  <div id="landmark-name"> </div>
		  <div id="landmark-description"> </div> */}
		  {/* <Card stateName={currentState} cityName={currentCity} landName={currentLandmark}/> */}
		  <CardOld stateName={currentState} cityName={currentCity} landName={currentLandmark}/>

		</div>
	  );
}


export default App;
