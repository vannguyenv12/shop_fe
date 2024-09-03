import productApi from '@/apis/productApi';
import { Button } from '@mui/material';
import { useEffect } from 'react';

function ProductList() {
  const fetchProducts = async () => {
    const res = await productApi.getAll();
    console.log('check res', res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Button variant='contained' color='success'>
        My Button
      </Button>
    </div>
  );
}

export default ProductList;
