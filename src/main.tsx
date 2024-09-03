import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// React Router DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import UserRoutes from './routes/user.routes.tsx';
import ProductList from './features/product/components/ProductList.tsx';

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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
