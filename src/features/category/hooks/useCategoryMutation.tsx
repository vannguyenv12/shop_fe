import categoryApi from '@/apis/categoryApi';
import { useMutation } from '@tanstack/react-query';

function useCategoryMutation() {
  return useMutation({
    mutationFn: categoryApi.create,
    onSuccess: (data) => {
      console.log('create category successfully', data);
    },
    onError: (error) => {
      console.log('error create category', error);
    },
  });
}

export default useCategoryMutation;
