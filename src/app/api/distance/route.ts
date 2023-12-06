import { convertEtaToHours } from "@/lib/ETA";
import { getSearchParams } from "@/lib/utils";
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;
export async function GET(request: Request) {
  const { origin, destination } = getSearchParams(
    request.url,
    "origin, destination"
  ) as { origin: string; destination: string };
  try {
    const data = await (
      await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`
      )
    ).json();

    const {
      rows: [{ elements }],
      destination_addresses,
      origin_addresses,
    } = data;
    // console.log({ elements });
    if (elements[0].status !== "OK") {
      let message = !destination_addresses
        ? "Invalid Destination Address"
        : "Invalid Origin Address";
      throw new Error(message);
    }
    console.log(
      elements[0].duration.text,
      convertEtaToHours(elements[0].duration.text)
    );
    return new Response(
      JSON.stringify({
        ...elements[0],
        formated_duration: convertEtaToHours(elements[0].duration.text),
        destination: destination_addresses[0],
        origin: origin_addresses[0],
      })
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ errorMessage: error.message }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {}
export async function PUT(request: Request) {}
export async function DELETE(request: Request) {}
