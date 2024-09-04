import authApi from '@/apis/authApi';
import { useAppDispatch } from '@/redux/hook';
import { setUser } from '@/redux/user/user.slice';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

function useLoginMutation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: async (data) => {
      console.log('success', data);
      const myInfo = await authApi.getMe();
      dispatch(
        setUser({
          firstName: myInfo.firstName,
          lastName: myInfo.lastName,
          email: myInfo.email,
          avatar: myInfo.avatar,
          role: myInfo.role,
        })
      );

      navigate('/products');
    },
    onError(error) {
      console.log('error', error);
    },
  });

  return mutation;
}

export default useLoginMutation;
