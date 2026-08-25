import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { addStockQty, warehouseId, notes, itemId, referenceNumber } =
      await request.json();

    const addstockadjustment = await db.AddStockAdjustment.create({
      data: {
        addStockQty: Number(addStockQty),
        warehouseId,
        notes,
        itemId,
        referenceNumber: Number(referenceNumber),
      },
    });

    console.log(AddStockAdjustment);
    return NextResponse.json(AddStockAdjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create a unit",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
