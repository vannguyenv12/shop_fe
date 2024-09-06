import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// React Router DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import UserRoutes from '@/routes/user.routes.tsx';
import ProductList from '@/features/product/components/ProductList.tsx';
import SignUpPage from '@/features/auth/pages/SignUpPage.tsx';
import SignInPage from './features/auth/pages/SignInPage';

// Redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Toast from '@/components/Toast';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AdminRoutes from '@/routes/admin.routes';
import Dashboard from '@/components/Dashboard';
import CategoryAdminPage from '@/features/category/pages/CategoryAdminPage';

// CSS

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserRoutes />,
    children: [
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'profile',
        element: <div>User Profile</div>,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminRoutes />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'category',
        element: <CategoryAdminPage />,
      },
    ],
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toast />

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
