import {
  FETCH_PRODUCTS_SUCCESS,
  CHANGE_FIRST_FETCH_DATA,
  FETCH_SELLERS_SUCCESS,
} from '_actions/constants/products';

const initialState = {
  data: [],
  isFirstFetchData: true,
  sellers: [],
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
    default:
      return state;
  }
};
