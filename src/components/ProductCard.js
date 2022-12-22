import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => (
  <Box sx={{ minWidth: 275 }}>
    <Card variant='outlined'>
      <CardContent sx={{ height: 180 }}>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {product.title}
        </Typography>
        <Typography variant='h5' component='div'>
          {product.category}
        </Typography>
        <Typography variant='body2'>Price: ${product.price}</Typography>
        <img src={product.image} width={'50px'} height={'50px'} alt={product.title} />
      </CardContent>
    </Card>
  </Box>
);

export default ProductCard;
