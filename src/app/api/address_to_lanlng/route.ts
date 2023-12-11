import { getGeocode } from "@/lib/ETA";
import { getSearchParams } from "@/utils/key_functions";



export async function GET(request: Response) {
  const { address } = getSearchParams(request.url, "address, hello") as {
    address: string;
    hello :"mimi"
  };
  try {
    const data = await getGeocode(address);
    // if(!data) throw new Error("No data found")
    // console.log()
    return new Response(JSON.stringify({address, data}));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
