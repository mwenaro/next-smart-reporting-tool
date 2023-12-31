import { NextResponse } from 'next/server';
const table = "users"

export async function GET(request: Request) {
 
 
  try {
  

    return new Response(JSON.stringify({name:"hello"}), {
      status: 200,
      statusText: 'OK',
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      statusText: 'An error occured',
    });
  }
}

export async function POST(request: Request) {
  try {
    let body = await request.json();
   
    return new Response(JSON.stringify({ msg: 'Successfully', body  }));
  } catch (error: any) {
    console.log({ error: error.message });
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
    
  }
}