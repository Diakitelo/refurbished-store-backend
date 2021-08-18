import React from 'react';

import { HomePage } from '@keystone-next/admin-ui/pages/HomePage';
import { gql } from '@keystone-next/admin-ui/apollo';

export default function Home() {
  return (
    <HomePage
      query={gql`
        query {
          keystone {
            adminMeta {
              lists {
                key
                fields {
                  path
                  createView {
                    fieldMode
                  }
                }
              }
            }
          }
          User: _allUsersMeta {
            count
          }
          Brand: _allBrandsMeta {
            count
          }
          Category: _allCategoriesMeta {
            count
          }
          Product: _allProductsMeta {
            count
          }
          CartItem: _allCartItemsMeta {
            count
          }
          ProductImage: _allProductImagesMeta {
            count
          }
          CategoryImage: _allCategoryImagesMeta {
            count
          }
        }
      `}
    />
  );
}
