import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  // TODO:
  // access:
  fields: {
    name: text({ isRequired: true }),
    slug: text({ isRequired: true }),
    color: text({ isRequired: true }),
    memory: integer({ isRequired: true }),
    state: text({ isRequired: true }),
    shortDescription: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photos: relationship({
      ref: 'ProductImage.product',
      many: true,
      ui: {
        displayMode: 'select',
      },
    }),
    brand: relationship({
      ref: 'Brand.products',
      many: true,
      ui: {
        displayMode: 'select',
      },
    }),
    category: relationship({
      ref: 'Category.products',
      many: true,
      ui: {
        displayMode: 'select',
      },
    }),
    quantity: integer({ isRequired: true }),
    price: integer({ isRequired: true }),
    originalPrice: integer({ isRequired: true }),
  },
});
