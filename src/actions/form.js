import {
  SEND_FORM_WORK_HERE,
  SEND_FORM_HIRE_US,
  SUCCESS_FORM_SEND,
  CLEAR_FORM_STATUSES,
  FAIL_FORM_SEND,
} from './constants/form';

export const sendFormWorkHere = () => ({
  type: SEND_FORM_WORK_HERE,
});

export const sendFormHireUs = () => ({
  type: SEND_FORM_HIRE_US,
});

export const successFormSend = () => ({
  type: SUCCESS_FORM_SEND,
});

export const failFormSend = () => ({
  type: FAIL_FORM_SEND,
});

export const clearFormStatus = () => ({
  type: CLEAR_FORM_STATUSES,
});
