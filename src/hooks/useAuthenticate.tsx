import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser, setUser } from '@/redux/user/user.slice';
import useGetMeQuery from '@/hooks/useGetMeQuery';
import { useAppSelector } from '@/redux/hook';
import { useNavigate } from 'react-router-dom';

function useAuthenticate() {
  const { data, isLoading, error } = useGetMeQuery();
  const user = useAppSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data && !user.isAuthenticated) {
      dispatch(
        setUser({
          firstName: data.firstName,
          lastName: data.lastName,
          avatar: data.avatar,
          email: data.email,
          role: data.role,
        })
      );
    }
  }, [dispatch, data, user.isAuthenticated]);

  useEffect(() => {
    if (!isLoading && !user.isAuthenticated && !data) {
      navigate('/sign-in');
    }
  }, [user, navigate, isLoading, data]);

  useEffect(() => {
    console.log('check data', user);
    if (data && user && user.isAuthenticated && user.user.role === 'USER') {
      navigate('/');
    }
  }, [data, user, navigate]);

  useEffect(() => {
    if (error) {
      dispatch(clearUser());
    }
  }, [error, dispatch]);

  return { isLoading, error };
}

export default useAuthenticate;
