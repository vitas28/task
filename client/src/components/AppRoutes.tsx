import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import ProductPage from '../Pages/ProductPage';
import AddProduct from '../Pages/AddProduct';

const AppRoutes: FC = () => (
  <Routes>
    <Route path={'/main'} element={<MainPage />} />
    <Route path={'/addProduct'} element={<AddProduct />} />
    <Route path={'/product/:id'} element={<ProductPage />} />
    <Route path={'*'} element={<Navigate to={'/main'} />} />
  </Routes>
);

export default AppRoutes;
