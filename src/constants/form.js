const options = [
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

export const hireUs = {
  form: 'hireUs',
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
      noSelectData: options,
      label: 'What can we help you with?',
      subLabel: 'Select what you need from the drop-down above.',
      id: 3,
    },
    {
      component: 'input',
      name: 'Budget',
      type: 'number',
      label: 'Budget*',
      subLabel: 'What is your budget for this project?',
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
  button: 'Начать проект',
};

export const workHere = {
  form: 'workHere',
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
  button: 'Хочу к вам!',
};

export const fileMimeTypes = 'image/jpg, image/jpeg, image/png, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.ms-powerpoint.presentation.macroEnabled.12, application/vnd.ms-powerpoint, application/x-iwork-keynote-sffkey';
