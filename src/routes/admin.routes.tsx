import { Outlet } from 'react-router-dom';

import useAuthenticate from '@/hooks/useAuthenticate';

function AdminRoutes() {
  const { isLoading, error } = useAuthenticate();

  if (isLoading) return <>Loading...</>;
  if (error) {
    return <>Error...</>;
  }

  return (
    <div>
      ADMIN HEADER
      <Outlet />
    </div>
  );
}

export default AdminRoutes;
