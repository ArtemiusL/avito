import {
  FETCH_PRODUCTS_SUCCESS,
} from '_actions/constants/products';

const initialState = {
  data: [
    {
      id: 1,
      title: 'Квартира на Невском',
      price: '8 000 000 ₽',
      address: {
        lat: 'Рыбка',
      },
      datePuclication: 'три дня назад',
    },
    {
      id: 2,
      title: 'Квартира на Невском',
      price: '8 000 000 ₽',
      address: {
        lat: 'Рыбка',
      },
      datePuclication: 'три дня назад',
    },
    {
      id: 3,
      title: 'Квартира на Невском',
      price: '8 000 000 ₽',
      address: {
        lat: 'Рыбка',
      },
      datePuclication: 'три дня назад',
    },
  ],
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
