import { connect } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req) {
  try {
    const { nid, name, email, contact, password } = await req.json();

    // Basic validation
    if (!nid || !name || !email || !contact || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const usersCollection = await connect("users");

   
    const existingUser = await usersCollection.findOne({
      $or: [{ nid }, { email }],
    });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists." },
        { status: 400 }
      );
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const result = await usersCollection.insertOne({
      nid,
      name,
      email,
      contact,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        id: result.insertedId,
      },
      { status: 201 }
    );

    


  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
  

}


export async function GET() {
  try {
    const caretakerCollection = await connect("caretaker");
    const data = await caretakerCollection.find({}).toArray();

    const result = data.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching caretakers:", error);
    return NextResponse.json(
      { error: "Failed to fetch caretakers" },
      { status: 500 }
    );
  }
}


