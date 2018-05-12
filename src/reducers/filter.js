import { queryStringToObject } from '_utils/query';
import {
  CHANGE_FILTER,
} from '_actions/constants/filter';

const defaultState = {
  isFavorite: true,
  category: 'all',
  sort: 'popular',
  price: 50000,
};

const getInitialState = () => {
  console.log('location.search', location.search);
  return (
    { ...defaultState, ...queryStringToObject(location.search) }
  );
};


const initialState = __SERVER__ ? defaultState : getInitialState();

console.log('initialState in filter', initialState);

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_FILTER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
