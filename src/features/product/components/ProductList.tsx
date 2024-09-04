import productApi from '@/apis/productApi';
import { useAppSelector } from '@/redux/hook';
import { Button } from '@mui/material';
import { useEffect } from 'react';

function ProductList() {
  const { user } = useAppSelector((state) => state.user);

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

      <span>
        Hello {user.firstName} {user.lastName}{' '}
      </span>
    </div>
  );
}

export default ProductList;
