// src/app/router/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../../pages/HomePage/HomePage';
import RequestPage from '../../pages/RequestPage/RequestPage';
import { ROUTES } from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.REQUEST, element: <RequestPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
