import { getRequest } from './request';

export const fetchProducts = () => {
  const url = 'https://avito.dump.academy/products';
  return getRequest(url);
};
