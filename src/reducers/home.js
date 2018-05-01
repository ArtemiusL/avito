const initialState = {
  team: {
    ru: {
      title: 'Команда',
      firstBlock: 'Наш GPI оценивает восемь критических областей вашей игры по шкале от 0 до 100. Используя эти оценки, мы можем определить ваш стиль игры и определить ваши сильные и слабые стороны. Наш GPI оценивает восемь критических областей вашей игры по шкале от 0 до 100. Используя эти оценки, мы можем определить ваш стиль игры и определить ваши сильные и слабые стороны.',
      secondBlock: 'Наш GPI оценивает восемь критических областей вашей игры по шкале от 0 до 100. Используя эти оценки, мы можем определить ваш стиль игры и определить ваши сильные и слабые стороны. Наш GPI оценивает восемь критических областей вашей игры по шкале от 0 до 100. Используя эти оценки, мы можем определить ваш стиль игры и определить ваши сильные и слабые стороны.',
    },

    en: {
      title: 'The team',
      firstBlock: 'Our GPI scores eight critical areas of your play on a scale from 0 to 100. Using these scores, we’re able to define your play style and pinpoint your strengths and weaknesses. UlOur GPI scores eight critical areas of your play on a scale from 0 to 100. Using these scores, we’re able to define your play style and pinpoint your strengths and weaknesses. Ul',
      secondBlock: 'Our GPI scores eight critical areas of your play on a scale from 0 to 100. Using these scores, we’re able to define your play style and pinpoint your strengths and weaknesses. UlOur GPI scores eight critical areas of your play on a scale from 0 to 100. Using these scores, we’re able to define your play style and pinpoint your strengths and weaknesses. Ul',
    },
  },

  services: {
    ru: {
      title: 'Сервисы',
      services: [
        {
          image: 'img/service-1.png',
          title: 'Тестовый заголовок',
          description: 'Тестовое описание 1',
          color: '#0092ff',
          id: 1,
        },
        {
          image: 'img/service-2.png',
          title: 'Тестовый заголовок 2',
          description: 'Тестовое описание 2',
          color: '#ffb232',
          id: 2,
        },
        {
          image: 'img/service-3.png',
          title: 'Тестовый заголовок 3',
          description: 'Тестовое описание 3',
          color: '#9e38ff',
          id: 3,
        },
        {
          image: 'img/service-4.png',
          title: 'Тестовый заголовок 4',
          description: 'Тестовое описание 4',
          color: '#0092ff',
          id: 4,
        },
      ],
    },

    en: {
      title: 'Services we provide',
      services: [
        {
          image: 'img/service-1.png',
          title: 'Full service marketing',
          description: 'Our GPI scores eight critical areas of your play on a scale from 0 to 100. Using these scores, we’re able to define your play style and pinpoint your strengths and weaknesses. Ultimately, our goal is to go above and beyond the simple statistical numbers that other sites give and provide you with personalized insights to level up your game.',
          color: '#0092ff',
          id: 1,
        },
        {
          image: 'img/service-2.png',
          title: 'Talant management',
          description: 'Our GPI scores eight critical areas of your play on a scale from 0 to 100. Using these scores, we’re able to define your play style and pinpoint your strengths and weaknesses. Ultimately, our goal is to go above and beyond the simple statistical numbers that other sites give and provide you with personalized insights to level up your game.',
          color: '#ffb232',
          id: 2,
        },
        {
          image: 'img/service-3.png',
          title: 'Data analytics and research',
          description: 'Our GPI scores eight critical areas of your play on a scale from 0 to 100. Using these scores, we’re able to define your play style and pinpoint your strengths and weaknesses. Ultimately, our goal is to go above and beyond the simple statistical numbers that other sites give and provide you with personalized insights to level up your game.',
          color: '#9e38ff',
          id: 3,
        },
        {
          image: 'img/service-4.png',
          title: 'Content creation',
          description: 'Our GPI scores eight critical areas of your play on a scale from 0 to 100. Using these scores, we’re able to define your play style and pinpoint your strengths and weaknesses. Ultimately, our goal is to go above and beyond the simple statistical numbers that other sites give and provide you with personalized insights to level up your game.',
          color: '#0092ff',
          id: 4,
        },
      ],
    },
  },
  questions: {
    ru: {
      title: 'Нам нравится говорить о киберспорте, приходите поболтать с нами',
      questions: [
        {
          title: 'Почему киберспорт так велик и важен?',
          image: 'картинка-1',
          id: 1,
        },
        {
          title: 'Почему мы лучшие для этой работы?',
          image: 'картинка-2',
          id: 2,
        },
        {
          title: 'Какой тип клиентов может принести наибольшую пользу?',
          image: 'картинка-3',
          id: 3,
        },
        {
          title: 'Почему киберспорт так велик и важен?',
          image: 'картинка-4',
          id: 4,
        },
      ],
    },

    en: {
      title: 'We like to talk about esports, come chat with us',
      questions: [
        {
          title: 'Why is esports so big and important?',
          image: 'image-1',
          id: 1,
        },
        {
          title: 'Why are we the best for the job?',
          image: 'image-2',
          id: 2,
        },
        {
          title: 'What type of clients could benefit the most?',
          image: 'image-3',
          id: 3,
        },
        {
          title: 'What kinds of integrations ca be done?',
          image: 'image-4',
          id: 4,
        },
      ],
    },
  },

  advice: {
    ru: {
      text: 'Мы рекомендуем маркетологам выделять на киберспорт примерно 10-20% своего рекламного бюджета',
    },

    en: {
      text: 'We recommend marketers to allocate approximately 10-20% of their advertising budget for eSports',
    },
  },

  contacts: {
    en: {
      background: 'img/contacts-map.jpg',
      buttons: [
        {
          id: 1,
          title: 'Work here!',
          linkTo: 'workHere',
        },
        {
          id: 2,
          title: 'Hire us!',
          linkTo: 'hireUs',
        },
      ],
    },

    ru: {
      background: 'img/contacts-map.jpg',
      buttons: [
        {
          id: 1,
          title: 'Работать здесь!',
          linkTo: '/workHere',
        },
        {
          id: 2,
          title: 'Нанять нас!',
          linkTo: '/hireUs',
        },
      ],
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
