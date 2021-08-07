import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  folder: process.env.CLOUDINARY_API_FOLDER,
};

export const CategoryImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'source',
    }),
    altText: text({ isRequired: true, isUnique: true }),
    category: relationship({ ref: 'Category.photo' }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'category'],
    },
  },
});
