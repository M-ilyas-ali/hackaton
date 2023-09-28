import { cart_table, db } from "@/lib/drizzle/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
    request: NextRequest,
    { params: { user_id} }: { params: { user_id: string } }
  ) => {
    if (!user_id) {
      return NextResponse.json({ message: "Invalid User ID" });
    }
    
    try {
      const res = await db
        .select()
        .from(cart_table)
        .where(eq(cart_table.user_id, user_id));
      const cart_data = res.map((item) => ({
        user_id: item.user_id,
        product_id: item.product_id,
        name: item.name,
        title: item.title,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
        total_price: item.total_price * item.quantity,
        image: item.image,
      }));
      const totalQuantity = cart_data.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalAmount = cart_data.reduce(
        (total, item) => total + item.total_price,
        0
      );
      return NextResponse.json({ cart_data, totalQuantity, totalAmount });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        Message: (error as { message: string }).message,
      });
    }
  };





  