import {
  CHANGE_LOCALIZATION,
  CHANGE_OVERFLOW_BODY,
  SWITCH_VIEWPORT,
} from '_actions/constants/common';

import { DESKTOP } from '_constants';

const initialState = {
  localization: 'en',
  isBodyOverflowHidden: false,
  viewport: DESKTOP,
  footer: {
    ru: {
      socialLinks: [
        {
          link: 'https://www.vk.com',
          image: 'img/icon-vk.png',
          width: '17px',
          id: 1,
        },
        {
          link: 'https://www.facebook.com/',
          image: 'img/icon-fb.png',
          width: '7px',
          id: 2,
        },
        {
          link: 'https://www.instagram.com',
          image: 'img/icon-inst.png',
          width: '14px',
          id: 3,
        },
      ],
      menuList: [
        {
          title: 'о нас / Сервисы ',
          section: 'services',
          id: 1,
        },
        {
          title: 'faq на русском',
          section: 'questions',
          id: 2,
        },
        {
          title: 'work here',
          section: 'contacts',
          id: 3,
        },
        {
          title: 'hire us',
          section: 'contacts',
          id: 4,
        },
      ],
    },

    en: {
      menuList: [
        {
          title: 'about / Services ',
          section: 'services',
          id: 1,
        },
        {
          title: 'esports faq',
          section: 'questions',
          id: 2,
        },
        {
          title: 'work here',
          section: 'contacts',
          id: 3,
        },
        {
          title: 'hire us',
          section: 'contacts',
          id: 4,
        },
      ],
      socialLinks: [
        {
          link: 'https://www.vk.com',
          image: 'img/icon-vk.png',
          width: '17px',
          id: 1,
        },
        {
          link: 'https://www.facebook.com/',
          image: 'img/icon-fb.png',
          width: '7px',
          id: 2,
        },
        {
          link: 'https://www.instagram.com',
          image: 'img/icon-inst.png',
          width: '14px',
          id: 3,
        },
      ],
    },
  },
  header: {
    ru: {
      button: 'Начать проект',
      menuList: [
        {
          title: 'о нас / Сервисы ',
          section: 'services',
          id: 1,
        },
        {
          title: 'faq на русском',
          section: 'questions',
          id: 2,
        },
        {
          title: 'work here',
          section: 'contacts',
          id: 3,
        },
        {
          title: 'hire us',
          section: 'contacts',
          id: 4,
        },
      ],
    },
    en: {
      button: 'Hire us',
      menuList: [
        {
          title: 'about / Services ',
          section: 'services',
          id: 1,
        },
        {
          title: 'esports faq',
          section: 'questions',
          id: 2,
        },
        {
          title: 'work here',
          section: 'contacts',
          id: 3,
        },
        {
          title: 'hire us',
          section: 'contacts',
          id: 4,
        },
      ],
    },
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_LOCALIZATION:
    case SWITCH_VIEWPORT:
      return { ...state, ...payload };

    case CHANGE_OVERFLOW_BODY:
      return { ...state, isBodyOverflowHidden: !state.isBodyOverflowHidden };

    default:
      return state;
  }
};
