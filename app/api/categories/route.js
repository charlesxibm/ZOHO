import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { title, description } = await request.json();

    const category = await db.category.create({
      data: { title, description },
    });

    console.log(category);
    return NextResponse.json(category);
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
    const categories = await db.category.findMany();

    return NextResponse.json(categories);
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
