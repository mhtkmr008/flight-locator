import React from "react";
import "../CSS/FlightTracker.css";
const FlightDetails=({flightData})=>{
    return (<div className="flight-details">
        <h2>Flight Details</h2>
        <p><strong>Flight Number:</strong> {flightData.flight.number}</p>
        <p><strong>Flight Name:</strong>{flightData.flight.name}</p>
        <p><strong>Carrier:</strong>{flightData.airline.name}</p>
        <p><strong>Departure Airport:</strong> {flightData.departure.airport}</p>
        <p><strong>Arrival Airport:</strong> {flightData.arrival.airport}</p>
        <p><strong>Flight Status:</strong> {flightData.flight_status}</p>
        <p><strong>Departure Time:</strong> {new Date(flightData.departure.scheduled).toLocaleString()}</p>
        <p><strong>Arrival Time:</strong> {new Date(flightData.arrival.scheduled).toLocaleString()}</p>
        {flightData.live ? (
             <div className="live-data"> 
             <p><strong>Latitude:</strong> {flightData.live.latitude}</p>
             <p><strong>Longitude:</strong> {flightData.live.longitude}</p>
             <p><strong>Location:</strong> {flightData.live.location}</p>
             <p><strong>Altitude:</strong> {flightData.live.altitude} meters</p>
             <p><strong>Direction:</strong> {flightData.live.direction} degrees</p>
             <p><strong>Horizontal Speed:</strong> {flightData.live.speed_horizontal} km/h</p>
             <p><strong>Vertical Speed:</strong> {flightData.live.speed_vertical} km/h</p>
             <p><strong>Is on Ground:</strong> {flightData.live.is_ground ? "Yes" : "No"}</p>
            </div>
         ) : ( <p><strong>Live data not available</strong></p> )}
    </div>);
};

export default FlightDetails;