module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  api: 'http://localhost:3000',
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Goose Gaming',
    titleTemplate: '',
    meta: [
      {
        name: 'description',
        content: 'Esports agency',
      },
    ],
  },
};
