import { Client, TravelMode } from "@googlemaps/google-maps-services-js";

export const convertEtaToHours = (etaString: string) => {
  // Split the string into parts
  const parts = etaString.split(" ");

  // Initialize variables for hours and minutes
  let hours = 0;
  let minutes = 0;

  // Iterate through parts and update hours and minutes
  for (let i = 0; i < parts.length; i += 2) {
    const value = parseInt(parts[i], 10);

    if (parts[i + 1] === "hours") {
      hours += value;
    } else if (parts[i + 1] === "mins") {
      minutes += value;
    }
  }

  // Convert total time to hours
  const totalHours = hours + minutes / 60;

  return totalHours;
};

export const getGeocode = async (address: string) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}`
    );
    const data = await response.json();

    if (data.results.length > 0) {
      const coordinates = data.results[0].geometry.location;
      return { lat: +coordinates.lat, lng: +coordinates.lng };
    } else {
      throw new Error("No location found");
      // return data
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const getDistance = async (origin: string, destination: string) => {
  const client = new Client();
  const originCoord = await getGeocode(origin),
    destCoord = await getGeocode(destination);

  try {
    const response = await client.distancematrix({
      params: {
        origins: [Object.values(originCoord).join(",")],
        destinations: [Object.values(destCoord).join(",")],

        // origins: ["-4.043740,39.658871"],
        // destinations: ["-1.2920659,36.82194619999996"],
        mode: "driving" as TravelMode, // Change as needed
      } as any,
    });

    // const distance = response.data.rows[0].elements[0].distance.value;

    const distance = response.data;
    return {
      status: "success",
      data: { distance },
    };
  } catch (error: any) {
    // return {
    //   status: 'error',
    //   error: error.message,
    // };
    throw new Error(error.message);
  }
};


export const getEvelevation = async (coordinates:{lat:number,lng:number}) => {
  const client = new Client({});
  try {
    const r = await client.elevation({
      params: {
        // locations: [{ lat: 45, lng: -110 }],
        locations: [coordinates],
        key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API!,
      },
      timeout: 1000, // milliseconds
    });

    console.log(r.data.results[0].elevation);
    return { data: r.data.results[0].elevation };
  } catch (e: any) {
    throw new Error(e.message);
  }
};