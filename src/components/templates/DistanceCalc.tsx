import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Location {
  lat: number;
  lng: number;
}

const DistanceCalc: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [distance, setDistance] = useState<string | null>(null);

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); // Run this effect only once when the component mounts

  const calculateDistance = () => {
    if (currentLocation) {
      const origin = `${currentLocation.lat},${currentLocation.lng}`;
      const destination = "Nairobi"; // Replace with the actual destination town
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;

      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const distanceText = data.rows[0].elements[0].distance.text;
          setDistance(distanceText);
          console.log({ data });
        })
        .catch((error) => {
          console.error("Error fetching distance:", error);
        });
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}>
      <GoogleMap
        center={currentLocation!}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "400px" }}
      >
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
      <button onClick={calculateDistance}>Calculate Distance to Nairobi</button>
      {distance && <p>Distance to Nairobi: {distance}</p>}
    </LoadScript>
  );
};

export default DistanceCalc;
