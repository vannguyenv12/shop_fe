import categoryApi from '@/apis/categoryApi';
import { useQuery } from '@tanstack/react-query';

function useCategoriesQuery() {
  const initialState: ICategoryResponse = {
    message: '',
    data: [],
  };

  const {
    data = initialState,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: categoryApi.getAll,
  });

  return { data, isLoading, error };
}

export default useCategoriesQuery;
