import React, { FC, useEffect } from 'react';
import AppRoutes from './components/AppRoutes';
import { useDispatch } from 'react-redux';
import { productsActions } from './store/products/action-creators';
import Header from './components/Header';

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.getProductsThunk());
  }, []);
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
