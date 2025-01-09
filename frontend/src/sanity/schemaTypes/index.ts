import { type SchemaTypeDefinition } from 'sanity'
import inventory from '../lib/inventory'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [inventory],
}
