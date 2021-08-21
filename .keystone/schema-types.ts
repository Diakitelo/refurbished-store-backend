type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type CartItemRelateToManyInput = {
  readonly create?: ReadonlyArray<CartItemCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CartItemWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CartItemWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly firstName?: Scalars['String'] | null;
  readonly firstName_not?: Scalars['String'] | null;
  readonly firstName_contains?: Scalars['String'] | null;
  readonly firstName_not_contains?: Scalars['String'] | null;
  readonly firstName_starts_with?: Scalars['String'] | null;
  readonly firstName_not_starts_with?: Scalars['String'] | null;
  readonly firstName_ends_with?: Scalars['String'] | null;
  readonly firstName_not_ends_with?: Scalars['String'] | null;
  readonly firstName_i?: Scalars['String'] | null;
  readonly firstName_not_i?: Scalars['String'] | null;
  readonly firstName_contains_i?: Scalars['String'] | null;
  readonly firstName_not_contains_i?: Scalars['String'] | null;
  readonly firstName_starts_with_i?: Scalars['String'] | null;
  readonly firstName_not_starts_with_i?: Scalars['String'] | null;
  readonly firstName_ends_with_i?: Scalars['String'] | null;
  readonly firstName_not_ends_with_i?: Scalars['String'] | null;
  readonly firstName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly firstName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly lastName?: Scalars['String'] | null;
  readonly lastName_not?: Scalars['String'] | null;
  readonly lastName_contains?: Scalars['String'] | null;
  readonly lastName_not_contains?: Scalars['String'] | null;
  readonly lastName_starts_with?: Scalars['String'] | null;
  readonly lastName_not_starts_with?: Scalars['String'] | null;
  readonly lastName_ends_with?: Scalars['String'] | null;
  readonly lastName_not_ends_with?: Scalars['String'] | null;
  readonly lastName_i?: Scalars['String'] | null;
  readonly lastName_not_i?: Scalars['String'] | null;
  readonly lastName_contains_i?: Scalars['String'] | null;
  readonly lastName_not_contains_i?: Scalars['String'] | null;
  readonly lastName_starts_with_i?: Scalars['String'] | null;
  readonly lastName_not_starts_with_i?: Scalars['String'] | null;
  readonly lastName_ends_with_i?: Scalars['String'] | null;
  readonly lastName_not_ends_with_i?: Scalars['String'] | null;
  readonly lastName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly lastName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly isAcceptedNewsletter?: Scalars['Boolean'] | null;
  readonly isAcceptedNewsletter_not?: Scalars['Boolean'] | null;
  readonly cart_every?: CartItemWhereInput | null;
  readonly cart_some?: CartItemWhereInput | null;
  readonly cart_none?: CartItemWhereInput | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'isAcceptedNewsletter_ASC'
  | 'isAcceptedNewsletter_DESC'
  | 'cart_ASC'
  | 'cart_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly firstName?: Scalars['String'] | null;
  readonly name?: Scalars['String'] | null;
  readonly lastName?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly isAcceptedNewsletter?: Scalars['Boolean'] | null;
  readonly cart?: CartItemRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly firstName?: Scalars['String'] | null;
  readonly name?: Scalars['String'] | null;
  readonly lastName?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly isAcceptedNewsletter?: Scalars['Boolean'] | null;
  readonly cart?: CartItemRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type ProductRelateToManyInput = {
  readonly create?: ReadonlyArray<ProductCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ProductWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ProductWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BrandWhereInput = {
  readonly AND?: ReadonlyArray<BrandWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BrandWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
};

export type BrandWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBrandsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'products_ASC'
  | 'products_DESC';

export type BrandUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type BrandsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BrandUpdateInput | null;
};

export type BrandCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type BrandsCreateInput = {
  readonly data?: BrandCreateInput | null;
};

export type CategoryImageRelateToOneInput = {
  readonly create?: CategoryImageCreateInput | null;
  readonly connect?: CategoryImageWhereUniqueInput | null;
  readonly disconnect?: CategoryImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CategoryWhereInput = {
  readonly AND?: ReadonlyArray<CategoryWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CategoryWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: CategoryImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
};

export type CategoryWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCategoriesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'products_ASC'
  | 'products_DESC';

export type CategoryUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly photo?: CategoryImageRelateToOneInput | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type CategoriesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CategoryUpdateInput | null;
};

export type CategoryCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly photo?: CategoryImageRelateToOneInput | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type CategoriesCreateInput = {
  readonly data?: CategoryCreateInput | null;
};

export type ProductImageRelateToManyInput = {
  readonly create?: ReadonlyArray<ProductImageCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ProductImageWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ProductImageWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BrandRelateToManyInput = {
  readonly create?: ReadonlyArray<BrandCreateInput | null> | null;
  readonly connect?: ReadonlyArray<BrandWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<BrandWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CategoryRelateToManyInput = {
  readonly create?: ReadonlyArray<CategoryCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CategoryWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CategoryWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly slug?: Scalars['String'] | null;
  readonly slug_not?: Scalars['String'] | null;
  readonly slug_contains?: Scalars['String'] | null;
  readonly slug_not_contains?: Scalars['String'] | null;
  readonly slug_starts_with?: Scalars['String'] | null;
  readonly slug_not_starts_with?: Scalars['String'] | null;
  readonly slug_ends_with?: Scalars['String'] | null;
  readonly slug_not_ends_with?: Scalars['String'] | null;
  readonly slug_i?: Scalars['String'] | null;
  readonly slug_not_i?: Scalars['String'] | null;
  readonly slug_contains_i?: Scalars['String'] | null;
  readonly slug_not_contains_i?: Scalars['String'] | null;
  readonly slug_starts_with_i?: Scalars['String'] | null;
  readonly slug_not_starts_with_i?: Scalars['String'] | null;
  readonly slug_ends_with_i?: Scalars['String'] | null;
  readonly slug_not_ends_with_i?: Scalars['String'] | null;
  readonly slug_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly slug_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly color?: Scalars['String'] | null;
  readonly color_not?: Scalars['String'] | null;
  readonly color_contains?: Scalars['String'] | null;
  readonly color_not_contains?: Scalars['String'] | null;
  readonly color_starts_with?: Scalars['String'] | null;
  readonly color_not_starts_with?: Scalars['String'] | null;
  readonly color_ends_with?: Scalars['String'] | null;
  readonly color_not_ends_with?: Scalars['String'] | null;
  readonly color_i?: Scalars['String'] | null;
  readonly color_not_i?: Scalars['String'] | null;
  readonly color_contains_i?: Scalars['String'] | null;
  readonly color_not_contains_i?: Scalars['String'] | null;
  readonly color_starts_with_i?: Scalars['String'] | null;
  readonly color_not_starts_with_i?: Scalars['String'] | null;
  readonly color_ends_with_i?: Scalars['String'] | null;
  readonly color_not_ends_with_i?: Scalars['String'] | null;
  readonly color_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly color_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly memory?: Scalars['Int'] | null;
  readonly memory_not?: Scalars['Int'] | null;
  readonly memory_lt?: Scalars['Int'] | null;
  readonly memory_lte?: Scalars['Int'] | null;
  readonly memory_gt?: Scalars['Int'] | null;
  readonly memory_gte?: Scalars['Int'] | null;
  readonly memory_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly memory_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly state?: Scalars['String'] | null;
  readonly state_not?: Scalars['String'] | null;
  readonly state_contains?: Scalars['String'] | null;
  readonly state_not_contains?: Scalars['String'] | null;
  readonly state_starts_with?: Scalars['String'] | null;
  readonly state_not_starts_with?: Scalars['String'] | null;
  readonly state_ends_with?: Scalars['String'] | null;
  readonly state_not_ends_with?: Scalars['String'] | null;
  readonly state_i?: Scalars['String'] | null;
  readonly state_not_i?: Scalars['String'] | null;
  readonly state_contains_i?: Scalars['String'] | null;
  readonly state_not_contains_i?: Scalars['String'] | null;
  readonly state_starts_with_i?: Scalars['String'] | null;
  readonly state_not_starts_with_i?: Scalars['String'] | null;
  readonly state_ends_with_i?: Scalars['String'] | null;
  readonly state_not_ends_with_i?: Scalars['String'] | null;
  readonly state_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly marque?: Scalars['String'] | null;
  readonly marque_not?: Scalars['String'] | null;
  readonly marque_contains?: Scalars['String'] | null;
  readonly marque_not_contains?: Scalars['String'] | null;
  readonly marque_starts_with?: Scalars['String'] | null;
  readonly marque_not_starts_with?: Scalars['String'] | null;
  readonly marque_ends_with?: Scalars['String'] | null;
  readonly marque_not_ends_with?: Scalars['String'] | null;
  readonly marque_i?: Scalars['String'] | null;
  readonly marque_not_i?: Scalars['String'] | null;
  readonly marque_contains_i?: Scalars['String'] | null;
  readonly marque_not_contains_i?: Scalars['String'] | null;
  readonly marque_starts_with_i?: Scalars['String'] | null;
  readonly marque_not_starts_with_i?: Scalars['String'] | null;
  readonly marque_ends_with_i?: Scalars['String'] | null;
  readonly marque_not_ends_with_i?: Scalars['String'] | null;
  readonly marque_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly marque_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly shortDescription?: Scalars['String'] | null;
  readonly shortDescription_not?: Scalars['String'] | null;
  readonly shortDescription_contains?: Scalars['String'] | null;
  readonly shortDescription_not_contains?: Scalars['String'] | null;
  readonly shortDescription_starts_with?: Scalars['String'] | null;
  readonly shortDescription_not_starts_with?: Scalars['String'] | null;
  readonly shortDescription_ends_with?: Scalars['String'] | null;
  readonly shortDescription_not_ends_with?: Scalars['String'] | null;
  readonly shortDescription_i?: Scalars['String'] | null;
  readonly shortDescription_not_i?: Scalars['String'] | null;
  readonly shortDescription_contains_i?: Scalars['String'] | null;
  readonly shortDescription_not_contains_i?: Scalars['String'] | null;
  readonly shortDescription_starts_with_i?: Scalars['String'] | null;
  readonly shortDescription_not_starts_with_i?: Scalars['String'] | null;
  readonly shortDescription_ends_with_i?: Scalars['String'] | null;
  readonly shortDescription_not_ends_with_i?: Scalars['String'] | null;
  readonly shortDescription_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly shortDescription_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photos_every?: ProductImageWhereInput | null;
  readonly photos_some?: ProductImageWhereInput | null;
  readonly photos_none?: ProductImageWhereInput | null;
  readonly brand_every?: BrandWhereInput | null;
  readonly brand_some?: BrandWhereInput | null;
  readonly brand_none?: BrandWhereInput | null;
  readonly category_every?: CategoryWhereInput | null;
  readonly category_some?: CategoryWhereInput | null;
  readonly category_none?: CategoryWhereInput | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly quantity_not?: Scalars['Int'] | null;
  readonly quantity_lt?: Scalars['Int'] | null;
  readonly quantity_lte?: Scalars['Int'] | null;
  readonly quantity_gt?: Scalars['Int'] | null;
  readonly quantity_gte?: Scalars['Int'] | null;
  readonly quantity_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly quantity_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly originalPrice?: Scalars['Int'] | null;
  readonly originalPrice_not?: Scalars['Int'] | null;
  readonly originalPrice_lt?: Scalars['Int'] | null;
  readonly originalPrice_lte?: Scalars['Int'] | null;
  readonly originalPrice_gt?: Scalars['Int'] | null;
  readonly originalPrice_gte?: Scalars['Int'] | null;
  readonly originalPrice_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly originalPrice_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type ProductWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'color_ASC'
  | 'color_DESC'
  | 'memory_ASC'
  | 'memory_DESC'
  | 'state_ASC'
  | 'state_DESC'
  | 'marque_ASC'
  | 'marque_DESC'
  | 'shortDescription_ASC'
  | 'shortDescription_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'photos_ASC'
  | 'photos_DESC'
  | 'brand_ASC'
  | 'brand_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'quantity_ASC'
  | 'quantity_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'originalPrice_ASC'
  | 'originalPrice_DESC';

export type ProductUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly slug?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly memory?: Scalars['Int'] | null;
  readonly state?: Scalars['String'] | null;
  readonly marque?: Scalars['String'] | null;
  readonly shortDescription?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photos?: ProductImageRelateToManyInput | null;
  readonly brand?: BrandRelateToManyInput | null;
  readonly category?: CategoryRelateToManyInput | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly originalPrice?: Scalars['Int'] | null;
};

export type ProductsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductUpdateInput | null;
};

export type ProductCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly slug?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly memory?: Scalars['Int'] | null;
  readonly state?: Scalars['String'] | null;
  readonly marque?: Scalars['String'] | null;
  readonly shortDescription?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photos?: ProductImageRelateToManyInput | null;
  readonly brand?: BrandRelateToManyInput | null;
  readonly category?: CategoryRelateToManyInput | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly originalPrice?: Scalars['Int'] | null;
};

export type ProductsCreateInput = {
  readonly data?: ProductCreateInput | null;
};

export type ProductRelateToOneInput = {
  readonly create?: ProductCreateInput | null;
  readonly connect?: ProductWhereUniqueInput | null;
  readonly disconnect?: ProductWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CartItemWhereInput = {
  readonly AND?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly quantity_not?: Scalars['Int'] | null;
  readonly quantity_lt?: Scalars['Int'] | null;
  readonly quantity_lte?: Scalars['Int'] | null;
  readonly quantity_gt?: Scalars['Int'] | null;
  readonly quantity_gte?: Scalars['Int'] | null;
  readonly quantity_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly quantity_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
};

export type CartItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCartItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'quantity_ASC'
  | 'quantity_DESC'
  | 'product_ASC'
  | 'product_DESC'
  | 'user_ASC'
  | 'user_DESC';

export type CartItemUpdateInput = {
  readonly quantity?: Scalars['Int'] | null;
  readonly product?: ProductRelateToOneInput | null;
  readonly user?: UserRelateToOneInput | null;
};

export type CartItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CartItemUpdateInput | null;
};

export type CartItemCreateInput = {
  readonly quantity?: Scalars['Int'] | null;
  readonly product?: ProductRelateToOneInput | null;
  readonly user?: UserRelateToOneInput | null;
};

export type CartItemsCreateInput = {
  readonly data?: CartItemCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type ProductImageWhereInput = {
  readonly AND?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
};

export type ProductImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type ProductImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductImageUpdateInput | null;
};

export type ProductImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesCreateInput = {
  readonly data?: ProductImageCreateInput | null;
};

export type CategoryRelateToOneInput = {
  readonly create?: CategoryCreateInput | null;
  readonly connect?: CategoryWhereUniqueInput | null;
  readonly disconnect?: CategoryWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CategoryImageWhereInput = {
  readonly AND?: ReadonlyArray<CategoryImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CategoryImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category?: CategoryWhereInput | null;
  readonly category_is_null?: Scalars['Boolean'] | null;
};

export type CategoryImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCategoryImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'category_ASC'
  | 'category_DESC';

export type CategoryImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly category?: CategoryRelateToOneInput | null;
};

export type CategoryImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CategoryImageUpdateInput | null;
};

export type CategoryImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly category?: CategoryRelateToOneInput | null;
};

export type CategoryImagesCreateInput = {
  readonly data?: CategoryImageCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'firstName'
    | 'name'
    | 'lastName'
    | 'email'
    | 'password'
    | 'isAcceptedNewsletter'
    | 'cart'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly firstName?: string | null;
    readonly name?: string | null;
    readonly lastName?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly isAcceptedNewsletter?: boolean | null;
    readonly cart?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type BrandListTypeInfo = {
  key: 'Brand';
  fields: 'id' | 'name' | 'products';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly products?: string | null;
  };
  inputs: {
    where: BrandWhereInput;
    create: BrandCreateInput;
    update: BrandUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BrandWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBrandsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BrandListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BrandListTypeInfo,
    BrandListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BrandListTypeInfo,
  BrandListTypeInfo['fields']
>;

export type CategoryListTypeInfo = {
  key: 'Category';
  fields: 'id' | 'name' | 'photo' | 'products';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly photo?: string | null;
    readonly products?: string | null;
  };
  inputs: {
    where: CategoryWhereInput;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CategoryWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCategoriesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CategoryListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CategoryListTypeInfo,
    CategoryListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CategoryListTypeInfo,
  CategoryListTypeInfo['fields']
>;

export type ProductListTypeInfo = {
  key: 'Product';
  fields:
    | 'id'
    | 'name'
    | 'slug'
    | 'color'
    | 'memory'
    | 'state'
    | 'marque'
    | 'shortDescription'
    | 'description'
    | 'photos'
    | 'brand'
    | 'category'
    | 'quantity'
    | 'price'
    | 'originalPrice';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly slug?: string | null;
    readonly color?: string | null;
    readonly memory?: number | null;
    readonly state?: string | null;
    readonly marque?: string | null;
    readonly shortDescription?: string | null;
    readonly description?: string | null;
    readonly photos?: string | null;
    readonly brand?: string | null;
    readonly category?: string | null;
    readonly quantity?: number | null;
    readonly price?: number | null;
    readonly originalPrice?: number | null;
  };
  inputs: {
    where: ProductWhereInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductListTypeInfo,
    ProductListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductListTypeInfo,
  ProductListTypeInfo['fields']
>;

export type CartItemListTypeInfo = {
  key: 'CartItem';
  fields: 'id' | 'quantity' | 'product' | 'user';
  backing: {
    readonly id: string;
    readonly quantity?: number | null;
    readonly product?: string | null;
    readonly user?: string | null;
  };
  inputs: {
    where: CartItemWhereInput;
    create: CartItemCreateInput;
    update: CartItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CartItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCartItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CartItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CartItemListTypeInfo,
    CartItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CartItemListTypeInfo,
  CartItemListTypeInfo['fields']
>;

export type ProductImageListTypeInfo = {
  key: 'ProductImage';
  fields: 'id' | 'image' | 'altText' | 'product';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly product?: string | null;
  };
  inputs: {
    where: ProductImageWhereInput;
    create: ProductImageCreateInput;
    update: ProductImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductImageListTypeInfo,
    ProductImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductImageListTypeInfo,
  ProductImageListTypeInfo['fields']
>;

export type CategoryImageListTypeInfo = {
  key: 'CategoryImage';
  fields: 'id' | 'image' | 'altText' | 'category';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly category?: string | null;
  };
  inputs: {
    where: CategoryImageWhereInput;
    create: CategoryImageCreateInput;
    update: CategoryImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CategoryImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCategoryImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CategoryImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CategoryImageListTypeInfo,
    CategoryImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CategoryImageListTypeInfo,
  CategoryImageListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Brand: BrandListTypeInfo;
  readonly Category: CategoryListTypeInfo;
  readonly Product: ProductListTypeInfo;
  readonly CartItem: CartItemListTypeInfo;
  readonly ProductImage: ProductImageListTypeInfo;
  readonly CategoryImage: CategoryImageListTypeInfo;
};
