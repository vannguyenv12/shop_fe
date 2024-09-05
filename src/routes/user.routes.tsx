import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser, setUser } from '@/redux/user/user.slice';
import useGetMeQuery from '@/hooks/useGetMeQuery';
import { useAppSelector } from '@/redux/hook';

function UserRoutes() {
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
    if (error) {
      dispatch(clearUser());
    }
  }, [error, dispatch]);

  if (isLoading) return <>Loading...</>;
  if (error) {
    return <>Error...</>;
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserRoutes;
