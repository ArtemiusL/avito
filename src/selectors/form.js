import { createSelector } from 'reselect';
import { rootSelector, localizationSelector } from './common';

export const formContentSelector = createSelector(
  rootSelector,
  ({ formContent }) => formContent,
);

export const hireUsContentSelector = createSelector(
  formContentSelector,
  localizationSelector,
  ({ hireUs }, localization) => hireUs[localization],
);

export const workHereContentSelector = createSelector(
  formContentSelector,
  localizationSelector,
  ({ workHere }, localization) => workHere[localization],
);

export const hireUsFormSelector = createSelector(
  rootSelector,
  ({ form }) => form.hireUs || {},
);

export const workHereFormSelector = createSelector(
  rootSelector,
  ({ form }) => form.workHere || {},
);
