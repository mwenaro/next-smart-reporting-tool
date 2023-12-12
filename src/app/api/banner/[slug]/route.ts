import { dbCon } from "@/libs/mongoose/dbCon";
import { BannerModel } from "@/libs/mongoose/models";
import {
  deleteRecord,
  getRecordById,
  updateRecord,
} from "@/libs/mongoose/mongoseCrud";

const table = "banners";
export async function GET(
  request: Request,
  { params: { slug } }: { params: { slug: any } }
) {
  try {
    const product = await getRecordById(table, slug);
    if (product) {
      return new Response(JSON.stringify(product));
    } else {
      return new Response(
        JSON.stringify({
          error: `${table.substring(0, table.length - 2)} not found`,
        }),
        { status: 400 }
      );
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}

export async function DELETE(
  request: Request,
  { params: { slug } }: { params: { slug: any } }
) {
  try {
    const result = await deleteRecord(table, slug);
    return new Response(JSON.stringify({ message: result }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
export async function PUT(
  request: Request,
  { params: { slug } }: { params: { slug: any } }
) {
  let body = await request.json();
  const { vendor, ...others } = body;
  let result;
  try {
    result = await updateRecord(table, slug, others);
    if (Object.keys(body).includes("vendor")) {
      await dbCon();
      result = await BannerModel.find({ vendor });
    }
    return new Response(JSON.stringify({ message: "success", data: result }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
