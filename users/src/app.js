import express from 'express';
import bodyParser from 'body-parser';
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-http-middleware';
import Backend from 'i18next-fs-backend';
import configI18n from './locales/config';

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(configI18n);

  
  const app = express();
  app.use(i18nextMiddleware.handle(i18next));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(require('./controllers/routes'));


export default app;
