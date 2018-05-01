import { createSelector } from 'reselect';
import { TABLET } from '_constants';

export const rootSelector = state => state;

export const commonSelector = createSelector(
  rootSelector,
  ({ common }) => common,
);

export const homeSelector = createSelector(
  rootSelector,
  ({ home }) => home,
);

export const localizationSelector = createSelector(
  commonSelector,
  ({ localization }) => localization,
);

export const isTabletSelector = createSelector(
  commonSelector,
  ({ viewport }) => viewport === TABLET,
);

export const overflowBodySelector = createSelector(
  commonSelector,
  ({ isBodyOverflowHidden }) => isBodyOverflowHidden,
);

export const footerSelector = createSelector(
  commonSelector,
  localizationSelector,
  ({ footer }, localization) => footer[localization],
);

export const headerSelector = createSelector(
  commonSelector,
  localizationSelector,
  ({ header }, localization) => header[localization],
);
