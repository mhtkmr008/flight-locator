import React from "react";
import { useState } from "react";
import "../CSS/FlightTracker.css";
const SearchBar=({onSearch})=>{
    const [flightNumber,setFlightNumber]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(flightNumber.trim())
        {
            onSearch(flightNumber);
        }else
        {
            alert("please enter a flight number");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text" placeholder="Enter Flight Number" value={flightNumber} onChange={(e)=>setFlightNumber(e.target.value)}></input>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;