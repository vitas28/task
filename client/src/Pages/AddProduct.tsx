import React, { ChangeEvent, FC, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { productsActions } from '../store/products/action-creators';
import { IProduct } from '../store/products/types';
import { useNavigate } from 'react-router-dom';

const AddProduct: FC = () => {
  const [newProduct, setNewProduct] = useState({});
  const [size, setSize] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const sizeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSize({ ...size, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    const product = {
      id: Date.now(),
      ...newProduct,
      size,
    } as IProduct;
    dispatch(productsActions.addProductThunk(product));
    navigate('/main');
    setNewProduct('');
    setSize('');
  };

  return (
    <div style={{ marginTop: 20 }}>
      <TextField
        onChange={productHandler}
        name={'imageUrl'}
        label="Image url"
        variant="outlined"
      />
      <TextField
        onChange={productHandler}
        name={'productName'}
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={productHandler}
        name={'count'}
        label="Count"
        variant="outlined"
      />
      <TextField
        onChange={sizeHandler}
        name={'width'}
        label="Width"
        variant="outlined"
      />
      <TextField
        onChange={sizeHandler}
        name={'height'}
        label="Height"
        variant="outlined"
      />
      <TextField
        onChange={productHandler}
        name={'weight'}
        label="Weight"
        variant="outlined"
      />
      <Button variant={'contained'} onClick={addProduct}>
        Add
      </Button>
    </div>
  );
};

export default AddProduct;
