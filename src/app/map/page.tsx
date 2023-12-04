"use client"
// import DistanceCalculator from '@/components/templates/DistanceCalc'

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import DistanceCalc from '@/components/templates/DistanceCalc';

interface Location {
  lat: number;
  lng: number;
}

const Map: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}>
      <GoogleMap
        center={currentLocation!}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '400px' }}
      >
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};





const MapPage = () => {
  return (
    <div className='w-[500px]'>
        <h2>Map</h2>
        <DistanceCalc />
        {/* <Map /> */}


    </div>
  )
}

export default MapPage