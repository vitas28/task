import { instance } from './api';
import { IProduct } from '../store/products/types';

export const productsAPI = {
  addProduct: (product: IProduct): Promise<number> => {
    return instance
      .post(
        'products',
        {
          product,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => res.status);
  },
  getProducts: (): Promise<IProduct[]> => {
    return instance.get('products').then((res) => res.data);
  },
  editProduct: (info: IProduct) => {
    return instance
      .put(
        'products',
        {
          info,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => res.status);
  },
  deleteProduct: () => {
    return instance.delete('products').then((res) => res.status);
  },
};
