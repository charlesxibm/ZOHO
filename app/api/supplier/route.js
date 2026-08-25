import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const {
      name,
      phone,
      email,
      address,
      contactPerson,
      notes,
      taxID,
      supplierCode,
      paymentTerms,
    } = await request.json();

    const supplier = await db.supplier.create({
      data: {
        name,
        phone,
        email,
        address,
        contactPerson,
        notes,
        taxID,
        supplierCode,
        paymentTerms,
      },
    });

    console.log(supplier);
    return NextResponse.json(supplier);
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

export async function GET() {
  try {
    const supplier = await db.supplier.findMany();

    return NextResponse.json(supplier);
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
