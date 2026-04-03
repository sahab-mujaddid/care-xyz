import { connect } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const bookingsCollection = await connect("bookings");

    const result = await bookingsCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const bookingsCollection = await connect("bookings");
    const data = await bookingsCollection.find({}).toArray();

    const result = data.map(item => ({ ...item, _id: item._id.toString() }));
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
