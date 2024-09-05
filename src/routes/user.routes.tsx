import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useAuthenticate from '@/hooks/useAuthenticate';

function UserRoutes() {
  const { isLoading, error } = useAuthenticate();

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
