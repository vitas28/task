export enum ProductTypes {
  ADD_PRODUCT = 'product/ADD_PRODUCT',
  GET_PRODUCTS = 'product/GET_PRODUCTS',
  EDIT_PRODUCT = 'product/EDIT_PRODUCT',
  DELETE_PRODUCT = 'product/DELETE_PRODUCT',
}

export interface ISize {
  width: string | number;
  height: string | number;
}

export interface IProduct {
  id: number;
  imageUrl: string;
  productName: string;
  count: number;
  size: ISize;
  weight: string;
  comments: string[];
}

export interface IAddProduct {
  type: typeof ProductTypes.ADD_PRODUCT;
  payload: IProduct;
}

export interface IGetProducts {
  type: typeof ProductTypes.GET_PRODUCTS;
  payload: IProduct[];
}

export interface IEditProduct {
  type: typeof ProductTypes.EDIT_PRODUCT;
  payload: IProduct;
}

export interface IDeleteProduct {
  type: typeof ProductTypes.DELETE_PRODUCT;
  payload: number;
}

export type ActionTypes =
  | IAddProduct
  | IGetProducts
  | IEditProduct
  | IDeleteProduct;
