import {
  CHANGE_LOCALIZATION,
  CHANGE_OVERFLOW_BODY,
  SWITCH_VIEWPORT,
} from './constants/common';

export const changeLocalization = payload => ({
  type: CHANGE_LOCALIZATION,
  payload,
});

export const changeOverflowBody = () => ({
  type: CHANGE_OVERFLOW_BODY,
});

export const switchViewport = viewport => ({
  type: SWITCH_VIEWPORT,
  payload: { viewport },
});
