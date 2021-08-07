import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Category = list({
  // todo
  // access
  fields: {
    name: text({ isRequired: true }),
    photo: relationship({
      ref: 'CategoryImage.category',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    products: relationship({
      ref: 'Product.category',
      many: true,
    }),
  },
});
