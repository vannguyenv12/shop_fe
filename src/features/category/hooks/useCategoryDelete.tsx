import categoryApi from '@/apis/categoryApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useCategoryDelete(handleCloseConfirmModal: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return categoryApi.delete(id);
    },
    onSuccess: (data) => {
      console.log('delete success', data);
      handleCloseConfirmModal();
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
    onError: (error) => {
      console.log('delete error', error);
    },
  });
}

export default useCategoryDelete;
