import {
  SUCCESS_FORM_SEND,
  CLEAR_FORM_STATUSES,
  FAIL_FORM_SEND,
} from '_actions/constants/form';


const initialState = {
  successFormSend: false,
  failSendForm: false,
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SUCCESS_FORM_SEND:
      return { ...state, successFormSend: true, failSendForm: false };

    case FAIL_FORM_SEND:
      return { ...state, failSendForm: true, successFormSend: false };

    case CLEAR_FORM_STATUSES:
      return { ...state, ...initialState };

    default:
      return state;
  }
};
