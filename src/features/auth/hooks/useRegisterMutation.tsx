import authApi from '@/apis/authApi';
import { useAppDispatch } from '@/redux/hook';
import { toast } from '@/redux/toast/toast.action';
import { setUser } from '@/redux/user/user.slice';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function useRegisterMutation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (authData: IAuthPayload) => {
      return authApi.register(authData);
    },
    onSuccess: async (data) => {
      console.log('success', data);
      const myInfo = await authApi.getMe();
      console.log('getMe', myInfo);

      dispatch(
        setUser({
          firstName: myInfo.firstName,
          lastName: myInfo.lastName,
          avatar: myInfo.avatar,
          email: myInfo.email,
          role: myInfo.role,
        })
      );
      dispatch(toast.success('Register Successfully'));

      navigate('/products');
    },
    onError: (error: AxiosError<unknown, IErrorResponse>) => {
      console.log('error happen when register user', error);
      dispatch(toast.error(error.message));
    },
  });

  return mutation;
}

export default useRegisterMutation;
