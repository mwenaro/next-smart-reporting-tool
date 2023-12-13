"use client";
// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// export type TMarker = { lat: number; lng: number };

// const MyMap = ({
//   width = "100%",
//   height = "500px",
// }: {
//   width?: string | number;
//   height?: string | number;
// }) => {
//   const [markers, setMarkers] = useState<TMarker[]>([]);
//   const [centerData, setCenterData] = useState<{
//     success: boolean;
//     coordinates: { lat: number; lng: number };
//   } | null>(null);

//   useEffect(() => {
//     const markersData: TMarker[] = [
//       { lat: -4.0431, lng: 39.6681 }, // Mombasa
//       { lat: -0.0788, lng: 34.9842 }, // Nairobi
//       { lat: 4.087, lng: 38.3224 }, // Kisumu
//     ];
//     setMarkers(markersData);

//    ( async () => {
//       const data = await (
//         await fetch("/api/map/geocode_from_address?address=Kwale")
//       ).json();
//       console.log({data})
//       if (data.success) setCenterData(data);
//     })()

//   }, []);

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}>
//       <GoogleMap
//         mapContainerStyle={{ width, height }}
//         zoom={6}
//         // center={{ lat: -1.286389, lng: 36.817223 }}
//         center={centerData?.coordinates ?? { lat: -1.286389, lng: 36.817223 }}
//       >
//         {markers.map((marker) => (
//           <Marker key={marker.lat} position={marker} />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MyMap;

import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export type TMarker = { title: string; marker: { lat: number; lng: number } };

const MyMap = ({
  width = 500,
  height = 500,
  zoomScale = 10,
}: {
  width?: string | number;
  height?: string | number;
  zoomScale?: number;
}) => {
  const [markers, setMarkers] = useState<TMarker[]>([]);
  const [centerData, setCenterData] = useState<{
    success: boolean;
    coordinates: { lat: number; lng: number };
  } | null>(null);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const markersData: TMarker[] = [
      { marker: { lat: -3.8666632, lng: 39.4666648 }, title: "mariakani" }, //mariakani
      { marker: { lat: -3.39605, lng: 38.55609 }, title: "Voi" }, //voi
      { marker: { lat: -2.69009, lng: 38.16631 }, title: "Mtito Andei" }, //mtito
      { marker: { lat: -4.0431, lng: 39.6681 }, title: "Mombasa" }, // Mombasa
      { marker: { lat: -0.0788, lng: 34.9842 }, title: "Nairobi" }, // Nairobi
      //   { lat: 4.087, lng: 38.3224 }, // Kisumu
    ];
    setMarkers(markersData);

    (async () => {
      const data = await (
        await fetch("/api/map/geocode_from_address?address=Meru")
      ).json();
      console.log({ data });
      if (data.success) setCenterData(data);
    })();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}>
      <GoogleMap
        // mapContainerStyle={{ width, height }}
        mapContainerStyle={{ width: "100vw", height: "400px" }}
        zoom={zoomScale}
        // center={{ lat: -1.286389, lng: 36.817223 }}
        center={centerData?.coordinates ?? currentLocation}
      >
        <Marker position={currentLocation} label={{ text: "Me" }} />
        {markers.map(({ marker, title }) => (
          <Marker
            key={marker.lat}
            position={marker}
            label={{ text: title, color: "black" }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
