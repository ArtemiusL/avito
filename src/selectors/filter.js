import { createSelector } from 'reselect';

import { rootSelector } from './common';
import { productsSelector } from './products';

const getNumberFromListResolution = (resolution) => {
  switch (resolution) {
    case 'HD':
      return 0;

    case 'Full HD':
      return 1;

    case '4K':
      return 2;

    case '5K':
      return 3;

    default:
      return 0;
  }
};

const autoFilter = (auto, filters) => (
  auto
    .filter(item => item.year > filters.year)
    .filter(item => item.gearbox === filters.gearbox)
    .filter(item => item.body_type === filters.body_type)
);

const immovablesFilter = (immovable, filters) => (
  immovable
    .filter(item => item.property_type === filters.property_type)
    .filter(item => item.square > filters.square)
    .filter(item => item.rooms === filters.rooms)
);

const camerasFilter = (cameras, filters) => (
  cameras
    .filter(item => item.camera_type === filters.camera_type)
    .filter(item => item.matrix_resolution > filters.matrix_resolution)
    .filter(item => getNumberFromListResolution(item.video_resolution) > getNumberFromListResolution(filters.video_resolution)
);

const laptopFilter = (auto, filters) => (
  auto
    .filter(item => item.laptop_type === filters.laptop_type)
    .filter(item => Number(item.ram) > Number(filters.ram))
    .filter(item => Number(item.screen) > Number(filters.screen))
    .filter(item => item.processor === filters.processor)
);

export const filterSelector = createSelector(
  rootSelector,
  ({ filter }) => filter,
);

export const filteredProductsSelector = createSelector(
  productsSelector,
  filterSelector,
  (products, { category, sort, price }) => {
    autoFilter
  },
);
