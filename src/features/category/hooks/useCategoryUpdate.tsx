import categoryApi from '@/apis/categoryApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface IUpdateCategoryPayload {
  id: number;
  category: {
    name: string;
    icon: string;
  };
}

function useCategoryUpdate(handleClose: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IUpdateCategoryPayload) => {
      return categoryApi.update(data.id, data.category);
    },
    onSuccess: (data) => {
      console.log('update success', data);
      handleClose();
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
    onError: (error) => {
      console.log('update error', error);
    },
  });
}

export default useCategoryUpdate;
