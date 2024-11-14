import React, { useState } from "react";
import getFlightDetails from "../service/flightLocatorService";
import FlightDetails from "./FlightDetails";
import SearchBar from "./SearchBar";
import "../CSS/FlightTracker.css";
const FlightLocatorComponent=()=>{
    const [flightData,setFlightData]=useState(null);
    const [error,setError]=useState("");

    const handleSearch=async (flightNumber)=>{
        try{
            const flightInfo= await getFlightDetails(flightNumber);
            setFlightData(flightInfo);
            setError(""); 
        }catch(err){
            setError("Could not find flight details.Please try again");
        };
    };

    return(
        <div id="app">
            <h1>Flight Tracker</h1>
            <SearchBar onSearch={handleSearch}></SearchBar>
            {error && <p style={{color:"red"}}>{error}</p>}
            {flightData && <FlightDetails flightData={flightData}/>}
        </div>
    );
};

export default FlightLocatorComponent;