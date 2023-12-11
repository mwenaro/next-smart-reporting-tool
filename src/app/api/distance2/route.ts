import { getDistance, getEvelevation, getGeocode } from "@/lib/ETA";
import { getSearchParams } from "@/utils/key_functions";

export async function GET(request: Request) {
  const { adress,  } = getSearchParams(
    request.url,
    "adress, destination"
  ) as { adress: string; destination: string };

  try {
    const coordinates = await getGeocode(adress);
    const data = await getEvelevation(coordinates);
    return new Response(JSON.stringify(data));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  const { origin, destination } = getSearchParams(
    request.url,
    "origin, destination"
  ) as { origin: string; destination: string };

  try {
    const data = await getDistance(origin, destination);
    return new Response(JSON.stringify(data));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
