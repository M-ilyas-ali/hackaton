import { NextRequest, NextResponse } from "next/server";
import { Cart, New_Cart, cart_table, db } from "@/lib/drizzle/drizzle";
import { and, eq } from "drizzle-orm";
export async function GET(request: NextRequest) {
  try {
    const res: Cart[] = await db.select().from(cart_table);
    return NextResponse.json(res);
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "could not Get Data 🥵" });
  }
}
export async function POST(request: NextRequest) {
  const req: New_Cart = await request.json();
  try {
    if (req) {
      const res = await db
        .insert(cart_table)
        .values({
          id: req.id,
          user_id: req.user_id,
          product_id: req.product_id,
          name: req.name,
          title: req.title,
          description: req.description,
          price: req.price,
          quantity: req.quantity,
          total_price: req.total_price,
          image: req.image,
        })
        .returning();
      console.log("Data Posted In DataBase 😄");
      return NextResponse.json(res);
    }
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Some thing Went Went Wrong 🥵" });
  }
}
export const PUT = async (request: NextRequest) => {
 
  const req: New_Cart = await request.json();

  try {
    if (req) {
      const res = await db
        .update(cart_table)
        .set({
          quantity: req.quantity,
          total_price: req.total_price,
        })
        .where(
          and(
            eq(cart_table.user_id, req.user_id as string),
            eq(cart_table.product_id, req.product_id)
          )
        )
        .returning();
        console.log("Data Updated In DataBase 😄");
      return NextResponse.json({ res });
    } else {
      throw new Error("Failed to update Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};
