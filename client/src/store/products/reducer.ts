import { ActionTypes, IProduct, ProductTypes } from './types';

const initialState: IProduct[] = [];

export const products = (
  state: IProduct[] = initialState,
  action: ActionTypes
): IProduct[] => {
  switch (action.type) {
    case ProductTypes.ADD_PRODUCT:
      return [...state, action.payload];
    case ProductTypes.GET_PRODUCTS:
      return action.payload;
    case ProductTypes.EDIT_PRODUCT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else return item;
      });
    case ProductTypes.DELETE_PRODUCT:
      return state.filter((product: IProduct) => product.id !== action.payload);
    default:
      return state;
  }
};
