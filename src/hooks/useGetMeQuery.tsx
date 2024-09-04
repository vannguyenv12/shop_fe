import authApi from '@/apis/authApi';
import { useQuery } from '@tanstack/react-query';

function useGetMeQuery() {
  return useQuery({
    queryKey: ['me'],
    queryFn: authApi.getMe,
  });
}

export default useGetMeQuery;
