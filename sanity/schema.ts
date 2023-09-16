import { type SchemaTypeDefinition } from 'sanity'
import { products } from './lib/schema/products'
import { category } from './lib/schema/category'
import { Gallery } from './lib/schema/gallery'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,category,Gallery],
}
