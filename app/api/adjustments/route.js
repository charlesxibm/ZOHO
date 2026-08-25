import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const {
      transferStockQty,
      warehouseId,
      receivingWarehouseId,
      itemId,
      notes,
      referenceNumber,
    } = await request.json();

    const transferstockadjustment = await db.transferstockadjustment.create({
      data: {
        transferStockQty: Number(transferStockQty),
        warehouseId,
        notes,
        itemId,
        referenceNumber,
        receivingWarehouseId,
      },
    });

    console.log(transferstockadjustment);
    return NextResponse.json(transferstockadjustment);
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
