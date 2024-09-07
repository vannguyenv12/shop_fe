import productApi from '@/apis/productApi';
import { useQuery } from '@tanstack/react-query';

function useProductsQuery() {
  const initialState: IApiResponse<IProduct[]> = {
    message: '',
    data: [],
  };

  const {
    data = initialState,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: productApi.getAll,
  });

  return { data, isLoading, error };
}

export default useProductsQuery;
