import { createSelector } from 'reselect';

import { rootSelector } from './common';

export const routingSelector = createSelector(
  rootSelector,
  ({ routing }) => routing,
);

export const locationSelector = createSelector(
  routingSelector,
  ({ location }) => location,
);

export const searchSelector = createSelector(
  locationSelector,
  ({ search }) => search,
);
