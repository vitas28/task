import {
  IAddProduct,
  IDeleteProduct,
  IEditProduct,
  IGetProducts,
  IProduct,
  ProductTypes,
} from './types';
import { AppDispatch } from '../store';
import { productsAPI } from '../../api/productsAPI';

const addProduct = (product: IProduct): IAddProduct => ({
  type: ProductTypes.ADD_PRODUCT,
  payload: product,
});

const getProducts = (products: IProduct[]): IGetProducts => ({
  type: ProductTypes.GET_PRODUCTS,
  payload: products,
});

const editProduct = (info: IProduct): IEditProduct => ({
  type: ProductTypes.EDIT_PRODUCT,
  payload: info,
});

const deleteProduct = (id: number): IDeleteProduct => ({
  type: ProductTypes.DELETE_PRODUCT,
  payload: id,
});

export const productsActions = {
  addProductThunk: (product: IProduct) => async (dispatch: AppDispatch) => {
    const status = await productsAPI.addProduct(product);
    if (status === 200) {
      dispatch(addProduct(product));
    }
  },
  getProductsThunk: () => async (dispatch: AppDispatch) => {
    const data: IProduct[] = await productsAPI.getProducts();
    dispatch(getProducts(data));
  },
  editProductThunk: (info: IProduct) => async (dispatch: AppDispatch) => {
    const status = await productsAPI.editProduct(info);
    if (status === 200) {
      dispatch(editProduct(info));
    }
  },
  deleteProduct: (id: number) => async (dispatch: AppDispatch) => {
    const status = await productsAPI.deleteProduct();
    if (status === 200) {
      dispatch(deleteProduct(id));
    }
  },
};
