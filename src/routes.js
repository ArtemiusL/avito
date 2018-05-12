import NotFoundPage from '_pages/NotFoundPage';
import Preview from '_pages/HomePage/Preview';

export default [
  {
    path: '/product/:id',
    component: Preview,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
