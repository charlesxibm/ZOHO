import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { transferStockQty, warehouseId, receivingBranchId, itemId, notes } =
      await request.json();

    const transferstockadjustment = await db.transferStockAdjustment.create({
      data: {
        transferStockQty: Number(transferStockQty),
        warehouseId,
        notes,
        itemId,
        receivingBranchId,
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
