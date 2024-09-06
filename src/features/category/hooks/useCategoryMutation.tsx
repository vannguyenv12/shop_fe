import categoryApi from '@/apis/categoryApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useCategoryMutation(handleClose: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: categoryApi.create,
    onSuccess: (data) => {
      console.log('create category successfully', data);
      handleClose();
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: (error) => {
      console.log('error create category', error);
    },
  });
}

export default useCategoryMutation;
