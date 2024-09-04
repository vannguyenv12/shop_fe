import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import authApi from '@/apis/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/user/user.slice';

function UserRoutes() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['me'],
    queryFn: authApi.getMe,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        firstName: data?.firstName,
        lastName: data?.lastName,
        avatar: data?.avatar,
        email: data?.email,
        role: data?.role,
      })
    );
  }, [dispatch, data]);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error...</>;

  console.log(data);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserRoutes;
