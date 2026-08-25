import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const data = await request.json();
    const { qty, itemNotes, ...itemData } = data;
    const item = await db.item.create({
      data: {
        ...itemData,
        quantity: Number(data.qty),
        notes: data.itemNotes,
        buyingPrice: Number(data.buyingPrice),
        sellingPrice: Number(data.sellingPrice),
        reOrderPoint: Number(data.reOrderPoint),
        taxRate: Number(data.taxRate),
        weight: data.weight ? Number(data.weight) : null,
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create the Item",
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
    const items = await db.item.findMany();

    return NextResponse.json(items);
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
