import authApi from '@/apis/authApi';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

function useLogoutMutation() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: (data) => {
      console.log('logout success', data);
      navigate('/sign-in');
    },
    onError: (error) => {
      console.log('logout error', error);
    },
  });

  return mutation;
}

export default useLogoutMutation;
