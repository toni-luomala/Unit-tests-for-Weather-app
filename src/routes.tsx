import { RouteProps } from 'react-router-dom';
import HomePage from 'pages/Home';
import LocationPage from 'pages/Location';
import SettingsPage from 'pages/Settings';
import { Navigate } from 'react-router-dom';

export const routes: RouteProps[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/location/:latitude/:longitude/:name/:admin1?',
    element: <LocationPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];
