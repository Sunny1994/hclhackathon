import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/strapi.ts';
import { Product } from '../types';
import ProductCard from '../components/ProductCard.tsx';
import { Grid, Container, Typography } from '@mui/material';
import withLoader from '../components/common/withLoader.tsx';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>Products</Typography>
      <Grid container spacing={2}>
        {products.map((p) => (
          <div key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </Grid>
    </Container>
  );
};

export default withLoader(Home, "Product");
