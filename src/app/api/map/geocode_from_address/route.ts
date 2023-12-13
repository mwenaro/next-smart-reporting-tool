import {  getGeocode } from "@/lib/ETA";
import { getSearchParams } from "@/utils/key_functions";

export async function GET(request: Request) {
    const { address,  } = getSearchParams(
      request.url,
      "address, destination"
    ) as { address: string; destination: string };
  
    try {
      const coordinates = await getGeocode(address);
      if(!coordinates) throw new Error("Address not found")
      return new Response(JSON.stringify({success:true,coordinates}));
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  }