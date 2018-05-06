import { queryStringToObject } from '_utils/query';
import {
  CHANGE_FILTER,
} from '_actions/constants/filter';

const defaultState = {
  isFavorite: true,
  category: 'all',
  sort: 'cheap-first',
  price: 2000,
  auto: {
    year: 2009,
    gearbox: 'automatic',
    body_type: 'suv',
  },
  immovable: {
    property_type: 'flat',
    square: 74,
    rooms: 2,
  },
  cameras: {
    camera_type: 'slr',
    matrix_resolution: 12,
    video_resolution: 'Full HD',
  },
  laptops: {
    laptop_type: 'home',
    ram: '8',
    screen: '13.3',
    processor: 'i5',
  },
};

const getInitialState = () =>
  (
    { ...defaultState, ...queryStringToObject(location.search) }
  );

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
