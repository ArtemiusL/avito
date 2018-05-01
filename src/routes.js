import HomePage from '_pages/HomePage';
import NotFoundPage from '_pages/NotFoundPage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage, // Add your route here
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
