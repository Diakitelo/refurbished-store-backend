import { list } from '@keystone-next/keystone/schema';
import { text, password, checkbox, relationship } from '@keystone-next/fields';

export const User = list({
  // access
  // ui
  fields: {
    firstName: text({ isRequired: true }),
    name: text(),
    lastName: text(),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    isAcceptedNewsletter: checkbox(),
    cart: relationship({
      ref: 'CartItem.user',
      many: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
    // TODO: Add roles, cart an orders
  },
});
