import React, { FC } from 'react';
import { IProduct } from '../store/products/types';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ProductCard from '../components/ProductCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainPage: FC = () => {
  const { products } = useTypedSelector((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Button
          onClick={() => navigate('/addProduct')}
          variant={'contained'}
          color={'success'}
        >
          Add product
        </Button>
      </div>
      <div className="content-wrapper">
        {products &&
          products.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              img={item.imageUrl}
              productName={item.productName}
              id={item.id}
            />
          ))}
      </div>
    </>
  );
};

export default MainPage;
