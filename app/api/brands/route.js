import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { title } = await request.json();

    const brand = await db.brand.create({
      data: {
        title,
      },
    });

    console.log(brand);
    return NextResponse.json(brand);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create a category",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function GET() {
  try {
    const brands = await db.brand.findMany();

    return NextResponse.json(brands);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch items",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
