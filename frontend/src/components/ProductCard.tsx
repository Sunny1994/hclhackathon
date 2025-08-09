import React, { useContext } from 'react';
import { Product } from '../types';
import { CartContext } from '../context/CartContext.tsx';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { Title, Price, Images } = product;
  
  return (
    <Card sx={{ maxWidth: 250, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${Images[0]?.formats?.small?.url}`}
        alt={Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">{Title}</Typography>
        <Typography variant="body2" color="text.secondary">{Price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {addToCart(product);}}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard
