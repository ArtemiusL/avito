const optionsEn = [
  {
    label: 'Logo Design',
    id: 1,
  },
  {
    label: 'Motion Design (Intro, Promotional Videos, etc.)',
    id: 2,
  },
  {
    label: 'Twitch Package (Scenes, Alerts, etc.)',
    id: 3,
  },
  {
    label: 'Social Media Banners (Twitter, YouTube, etc.)',
    id: 4,
  },
  {
    label: 'Other',
    id: 5,
  },
];

const optionsRu = [
  {
    label: 'Дизайн логотипа',
    id: 1,
  },
  {
    label: 'Моушен дизайн (Введение, рекламные видеоролики и т. д.)',
    id: 2,
  },
  {
    label: 'Пакет Twitch (сцены, оповещения и т. д.)',
    id: 3,
  },
  {
    label: 'Социальные Медиа баннеры (Twitter, YouTube и др.)',
    id: 4,
  },
  {
    label: 'Другое',
    id: 5,
  },
];

const initialState = {
  hireUs: {
    ru: {
      form: 'hireUs',
      formTitle: 'Отправить запрос',
      errorsLocal: {
        required: 'Обязательное поле',
        email: 'Данные не в валидном формате',
      },
      fields: [
        {
          component: 'input',
          name: 'Email',
          type: 'email',
          label: 'Ваш email*',
          subLabel: '',
          id: 1,
        },
        {
          component: 'input',
          name: 'Subject',
          label: 'Тема*',
          subLabel: '',
          id: 2,
        },
        {
          component: 'multiSelect',
          name: 'TypeService',
          noSelectData: optionsRu,
          label: 'Чем мы можем помочь вам?',
          subLabel: 'Выберите то, что вам нужно из раскрывающегося списка выше.',
          id: 3,
        },
        {
          component: 'input',
          name: 'Budget',
          type: 'number',
          label: 'Ваш бюджет*',
          subLabel: 'Каков ваш бюджет для этого проекта в (RUB)?',
          id: 4,
        },
        {
          component: 'input',
          name: 'Description',
          label: 'Описание*',
          element: 'textarea',
          subLabel: 'Пожалуйста, введите данные вашего запроса. Сотрудник нашей службы поддержки ответит как можно скорее.',
          id: 5,
        },
        {
          component: 'input',
          name: 'Attachments',
          type: 'image',
          label: 'Вложения',
          element: 'image',
          subLabel: '',
          id: 6,
        },
      ],
      initialValues: {
        TypeService: [],
        Attachments: [],
      },
      button: 'Начать проект',
      attachmentsButton: 'Добавить файл или удалить файлы здесь',
    },
    en: {
      form: 'hireUs',
      formTitle: 'Submit a request',
      errorsLocal: {
        required: 'Required',
        email: 'Invalid email a',
      },
      fields: [
        {
          component: 'input',
          name: 'Email',
          type: 'email',
          label: 'Your email adress*',
          subLabel: '',
          id: 1,
        },
        {
          component: 'input',
          name: 'Subject',
          label: 'Subject*',
          subLabel: '',
          id: 2,
        },
        {
          component: 'multiSelect',
          name: 'TypeService',
          noSelectData: optionsEn,
          label: 'What can we help you with?',
          subLabel: 'Select what you need from the drop-down above.',
          id: 3,
        },
        {
          component: 'input',
          name: 'Budget',
          type: 'number',
          label: 'Budget*',
          subLabel: 'What is your budget for this project (RUB)?',
          id: 4,
        },
        {
          component: 'input',
          name: 'Description',
          label: 'Description*',
          element: 'textarea',
          subLabel: 'Please enter the details of your request. A member of our support staff will respond as soon as possible.',
          id: 5,
        },
        {
          component: 'input',
          name: 'Attachments',
          type: 'image',
          label: 'Attachments',
          element: 'image',
          subLabel: '',
          id: 6,
        },
      ],
      initialValues: {
        TypeService: [],
        Attachments: [],
      },
      button: 'Hire us',
      attachmentsButton: 'Add file or drop files here',
    },
  },
  workHere: {
    ru: {
      form: 'workHere',
      formTitle: 'Отправить запрос',
      errorsLocal: {
        required: 'Обязательное поле',
        email: 'Данные не в валидном формате',
      },
      fields: [
        {
          component: 'input',
          name: 'Name',
          label: 'Ваше имя*',
          subLabel: '',
          id: 1,
        },
        {
          component: 'input',
          name: 'Email',
          type: 'email',
          label: 'Ваш email*',
          subLabel: '',
          id: 2,
        },
        {
          component: 'input',
          name: 'Subject',
          label: 'Тема*',
          subLabel: '',
          id: 3,
        },
        {
          component: 'input',
          name: 'Description',
          label: 'Описание*',
          element: 'textarea',
          subLabel: 'Пожалуйста, введите данные вашего запроса. Сотрудник нашей службы поддержки ответит как можно скорее.',
          id: 4,
        },
        {
          component: 'input',
          name: 'Attachments',
          type: 'image',
          label: 'Вложения',
          element: 'image',
          subLabel: '',
          id: 5,
        },
      ],
      initialValues: {
        Attachments: [],
      },
      button: 'Хочу к вам!',
      attachmentsButton: 'Добавить файл или удалить файлы здесь',
    },
    en: {
      form: 'workHere',
      formTitle: 'Submit a request',
      errorsLocal: {
        required: 'Required',
        email: 'Invalid email a',
      },
      fields: [
        {
          component: 'input',
          name: 'Name',
          label: 'Your name*',
          subLabel: '',
          id: 1,
        },
        {
          component: 'input',
          name: 'Email',
          type: 'email',
          label: 'Your email adress*',
          subLabel: '',
          id: 2,
        },
        {
          component: 'input',
          name: 'Subject',
          label: 'Subject*',
          subLabel: '',
          id: 3,
        },
        {
          component: 'input',
          name: 'Description',
          label: 'Description*',
          element: 'textarea',
          subLabel: 'Please enter the details of your request. A member of our support staff will respond as soon as possible.',
          id: 4,
        },
        {
          component: 'input',
          name: 'Attachments',
          type: 'image',
          label: 'Attachments',
          element: 'image',
          subLabel: '',
          id: 5,
        },
      ],
      initialValues: {
        Attachments: [],
      },
      button: 'Want to you!',
      attachmentsButton: 'Add file or drop files here',
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
