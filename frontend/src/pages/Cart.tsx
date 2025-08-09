import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.tsx';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import withLoader from '../components/common/withLoader.tsx';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>Your Cart</Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} secondaryAction={
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          }>
            <ListItemText
              primary={item.Title}
              secondary={`${item.Price}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default withLoader(Cart, "Cart");
