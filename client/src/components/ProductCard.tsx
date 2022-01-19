import React, { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { productsActions } from '../store/products/action-creators';
import { useDispatch } from 'react-redux';
import { ProductCardProps } from '../types';

const ProductCard: FC<ProductCardProps> = ({ img, productName, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteCard = (): void => {
    dispatch(productsActions.deleteProduct(id));
  };

  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <img className="card-img" src={img} alt="product" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
      </CardContent>
      <CardActions className="card-button">
        <Button
          onClick={() => navigate('/product/' + id)}
          variant={'contained'}
          color={'secondary'}
        >
          Open
        </Button>
        <Button onClick={deleteCard} variant={'contained'} color={'error'}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
