import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  varchar,
  integer,
  serial,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
export const cart_table = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  price: integer("price").notNull(),
  image: varchar("image", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  title:varchar("title",{length:255}).notNull(),
  quantity: integer("quantity").notNull(),
  total_price: integer("total_price").notNull(),
});

export type Cart = InferModel<typeof cart_table>;
export type New_Cart = InferModel<typeof cart_table, "insert">;
export const db = drizzle(sql);
// CREATE TABLE IF NOT EXISTS cart (
//  id serial PRIMARY KEY,
//  user_id VARCHAR (255) NOT NULL,
//  product_id VARCHAR (255) NOT NULL,
//  name VARCHAR (255) NOT NULL,
//  title VARCHAR (255) NOT NULL,
//  image VARCHAR (255) NOT NULL,
//  description VARCHAR (255) NOT NULL,
//  price INT NOT NULL,
//  quantity INT NOT NULL,
//  total_price INT NOT NULL  
//    );
