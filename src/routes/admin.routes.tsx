import { Outlet } from 'react-router-dom';

import useAuthenticate from '@/hooks/useAuthenticate';
import HeaderAdmin from '@/components/HeaderAdmin';
import Sidebar from '@/components/Sidebar';

function AdminRoutes() {
  const { isLoading, error } = useAuthenticate();

  if (isLoading) return <>Loading...</>;
  if (error) {
    return <>Error...</>;
  }

  return (
    <div>
      <HeaderAdmin />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AdminRoutes;
