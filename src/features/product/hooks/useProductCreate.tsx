import productApi from '@/apis/productApi';
import { useMutation } from '@tanstack/react-query';

function useProductCreate() {
  return useMutation({
    mutationFn: productApi.create,
    onSuccess: (data) => {
      console.log('create product success', data);
    },
    onError: (error) => {
      console.log('create product error', error);
    },
  });
}

export default useProductCreate;
