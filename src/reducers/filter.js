import { queryStringToObject } from '_utils/query';
import {
  CHANGE_FILTER,
} from '_actions/constants/filter';

const defaultState = {
  isFavorite: true,
  category: 'all',
  sort: 'popular',
  price: 50000,
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
    matrix_resolution: 1,
    video_resolution: 'HD',
  },
  laptops: {
    laptop_type: 'professional',
    ram: '4',
    screen: '13',
    processor: 'i3',
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
