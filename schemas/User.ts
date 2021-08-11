import { list } from '@keystone-next/keystone/schema';
import { text, password, checkbox } from '@keystone-next/fields';

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
    // todo: add roles, cart and orders
  },
});
