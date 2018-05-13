import { getRequest } from './request';

export const fetchProducts = () => {
  const url = 'https://avito.dump.academy/products';
  return getRequest(url);
};

export const fetchSellers = () => {
  const url = 'https://avito.dump.academy/sellers';
  return getRequest(url);
};
