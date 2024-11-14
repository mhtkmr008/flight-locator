import axios from "axios";

const API_BASE_URL="https://api.aviationstack.com/v1";
const API_KEY="6764f7e5f5dde6af3df15dea7f5bf794";
const GOOGLE_MAPS_API_KEY = "AIzaSyCzuzWuG5WJJnND1wf2LG9PUfQ-1kAqjuM";
const getFlightDetails=async (flightNumber)=>{
    try{
        const response= await axios.get(`${API_BASE_URL}/flights`,{params:{access_key: API_KEY,flight_iata: flightNumber,},});
        if (response.data.data && response.data.data.length > 0) {
            const flightInfo = response.data.data[0]; // Get the first flight's details
            if (flightInfo.live) 
                {
                     const location = await getLocationDetails(flightInfo.live.latitude, flightInfo.live.longitude);
                    flightInfo.live.location = location;
                 }
            console.log("API Response:", response.data);
            alert(`Flight Number: ${flightInfo.flight.number}`);  // Debug alert
            return flightInfo;
        } else {
            throw new Error("No flight details found for the given flight number.");
        }
    }catch(error){console.error("error fetching data:",error);
        throw new Error("could not find flight details");
    };
};

const getLocationDetails = async (latitude, longitude) => { try { const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, { params: { latlng: `${latitude},${longitude}`, key: GOOGLE_MAPS_API_KEY, }, }); if (response.data.results && response.data.results.length > 0) { return response.data.results[0].formatted_address; } else { throw new Error("No location details found for the given coordinates."); } } catch (error) { console.error("Error fetching location data:", error); console.error("Response data:", error.response.data); // Log the response data for debugging 
    throw new Error("Could not find location details"); 
}
};
export default getFlightDetails;