import {
  FETCH_PRODUCTS_SUCCESS,
  CHANGE_FIRST_FETCH_DATA,
} from '_actions/constants/products';

const initialState = {
  data: [],
  isFirstFetchData: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, data: payload };

    case CHANGE_FIRST_FETCH_DATA:
      return { ...state, isFirstFetchData: false };
    default:
      return state;
  }
};
