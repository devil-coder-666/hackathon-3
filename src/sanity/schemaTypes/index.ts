import { productSchema } from "./saman";
import { SchemaTypeDefinition } from 'sanity'; // Replace 'some-module' with the actual module name




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
