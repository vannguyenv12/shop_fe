import productApi from '@/apis/productApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useProductDelete(handleCloseConfirmModal: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productApi.delete,
    onSuccess(data) {
      console.log('delete product success', data);
      handleCloseConfirmModal();
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
    onError(error) {
      console.log('delete product error', error);
    },
  });
}

export default useProductDelete;
