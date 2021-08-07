import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Brand = list({
  // todo
  // access
  fields: {
    name: text({ isRequired: true }),
    products: relationship({
      ref: 'Product.brand',
      many: true,
    }),
  },
});
