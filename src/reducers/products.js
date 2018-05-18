import {
  FETCH_PRODUCTS_SUCCESS,
  CHANGE_FIRST_FETCH_DATA,
  FETCH_SELLERS_SUCCESS,
  TOGGLE_IN_FAVORITE,
  CHANGE_FAVORITE_LIST,
} from '_actions/constants/products';

const initialState = {
  data: [],
  isFirstFetchData: true,
  sellers: [],
  favoriteDataIds: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, data: payload };

    case CHANGE_FIRST_FETCH_DATA:
      return { ...state, isFirstFetchData: false };

    case FETCH_SELLERS_SUCCESS:
      return { ...state, sellers: payload };

    case TOGGLE_IN_FAVORITE:
      if (state.favoriteDataIds.indexOf(payload) === -1) {
        return { ...state, favoriteDataIds: [...state.favoriteDataIds, payload] };
      }
      return {
        ...state,
        favoriteDataIds: state.favoriteDataIds.filter(item => item !== payload),
      };

    case CHANGE_FAVORITE_LIST:
      return { ...state, favoriteDataIds: payload };

    default:
      return state;
  }
};
