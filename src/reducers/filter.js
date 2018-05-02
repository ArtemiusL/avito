import { queryStringToObject } from '_utils/query';
import {
  CHANGE_FILTER,
} from '_actions/constants/filter';

const defaultState = {
  isFavorite: true,
  category: 'all',
  sort: 'cheap-first',
  price: 2000,
};

const getInitialState = () =>
  (
    { ...defaultState, ...queryStringToObject(location.search) }
  );

if (!__SERVER__) console.log(getInitialState());

const initialState = __SERVER__ ? defaultState : getInitialState();

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_FILTER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
