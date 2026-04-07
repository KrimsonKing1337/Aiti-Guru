export type DummyJsonAuthLoginResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type DummyJsonAuthRefreshResponse = Pick<DummyJsonAuthLoginResponse, 'accessToken' | 'refreshToken'>;

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  sku: string;
  thumbnail: string;
};

export type DummyJsonProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type ProductSortField =
  | 'title'
  | 'price'
  | 'brand'
  | 'rating'
  | 'sku';

export type ProductSortOrder = 'asc' | 'desc';

export type FetchProductsParams = {
  limit: number;
  skip: number;
  sortBy?: ProductSortField;
  order: ProductSortOrder;
  search?: string;
};

export type FetchProductsRequestParams = Omit<FetchProductsParams, 'search'> & {
  q?: string;
};
