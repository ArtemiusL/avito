import { createSelector } from 'reselect';
import { localizationSelector, homeSelector } from './common';

export const teamSelector = createSelector(
  homeSelector,
  localizationSelector,
  ({ team }, localization) => team[localization],
);

export const servicesSelector = createSelector(
  homeSelector,
  localizationSelector,
  ({ services }, localization) => services[localization],
);

export const questionsSelector = createSelector(
  homeSelector,
  localizationSelector,
  ({ questions }, localization) => questions[localization],
);

export const adviceSelector = createSelector(
  homeSelector,
  localizationSelector,
  ({ advice }, localization) => advice[localization].text,
);

export const contactsSelector = createSelector(
  homeSelector,
  localizationSelector,
  ({ contacts }, localization) => contacts[localization],
);
