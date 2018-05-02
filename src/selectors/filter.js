import { createSelector } from 'reselect';

import { rootSelector } from './common';

export const filterSelector = createSelector(
  rootSelector,
  ({ filter }) => filter,
);
