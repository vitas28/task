import React, { ChangeEvent, FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IProduct } from '../store/products/types';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { productsActions } from '../store/products/action-creators';

const ProductPage: FC = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [edit, setEdit] = useState<boolean>(false);
  const { products } = useTypedSelector((state) => state);
  const product: IProduct | undefined = products.find(
    (item: IProduct) => params.id && item.id && item.id === +params.id
  );
  const [info, setInfo] = useState({});
  const [size, setSize] = useState({});

  const infoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const sizeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSize({ ...size, [e.target.name]: e.target.value });
  };

  const onEdit = () => {
    let productId;
    let image;
    if (product) {
      image = product.imageUrl;
      productId = product.id;
    }
    const editProduct = {
      id: productId,
      imageUrl: image,
      ...info,
      size,
    } as IProduct;
    dispatch(productsActions.editProductThunk(editProduct));
    setEdit(false);
  };

  const cancelHandler = () => {
    setSize('');
    setInfo('');
    setEdit(false);
  };

  return (
    <>
      {product && (
        <div className="product">
          <img src={product.imageUrl} alt="photo" />
          {!edit ? (
            <>
              <h1>{product.productName}</h1>
              <strong>Count: {product.count}</strong>
              <h3>
                width: {product.size.width}, height: {product.size.height}
              </h3>
              <h2>weight: {product.weight}</h2>
              <div className="button-edit">
                <Button
                  onClick={() => setEdit(true)}
                  variant={'contained'}
                  color={'secondary'}
                >
                  Edit
                </Button>
              </div>
            </>
          ) : (
            <div className="edit">
              <TextField
                onChange={infoHandler}
                name={'productName'}
                label="Name"
                variant="outlined"
              />
              <TextField
                onChange={infoHandler}
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
                onChange={infoHandler}
                name={'weight'}
                label="Weight"
                variant="outlined"
              />
              <div className="button-edit">
                <Button
                  onClick={onEdit}
                  variant={'contained'}
                  color={'secondary'}
                >
                  Submit
                </Button>
                <Button
                  onClick={cancelHandler}
                  variant={'contained'}
                  color={'error'}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

// <TextField id="outlined-basic" label="Outlined" variant="outlined" />

export default ProductPage;
