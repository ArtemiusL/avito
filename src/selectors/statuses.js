import { createSelector } from 'reselect';
import { rootSelector } from './common';

export const statusesSelector = createSelector(
  rootSelector,
  ({ statuses }) => statuses,
);

export const successStatusFormSelector = createSelector(
  statusesSelector,
  ({ successFormSend }) => successFormSend,
);

export const failStatusFormSelector = createSelector(
  statusesSelector,
  ({ failSendForm }) => failSendForm,
);
