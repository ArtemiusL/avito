import {
  FETCH_PRODUCTS_SUCCESS,
} from '_actions/constants/products';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, data: payload };
    default:
      return state;
  }
};
