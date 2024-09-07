import productApi from '@/apis/productApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useProductCreate(handleClose: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productApi.create,
    onSuccess: (data) => {
      console.log('create product success', data);
      handleClose();
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
    onError: (error) => {
      console.log('create product error', error);
    },
  });
}

export default useProductCreate;
