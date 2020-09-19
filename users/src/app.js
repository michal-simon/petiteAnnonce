import express from 'express';
import bodyParser from 'body-parser';
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-http-middleware';
import Backend from 'i18next-fs-backend';

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    // debug: true,
    backend: {
      // eslint-disable-next-line no-path-concat
      loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
      // eslint-disable-next-line no-path-concat
      addPath: __dirname + '/locales/{{lng}}/{{ns}}.missing.json'
    },
    fallbackLng: 'fr',
    preload: ['fr', 'en'],
    saveMissing: true
  });

const app = express();
app.use(i18nextMiddleware.handle(i18next));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(require('./controllers/routes'));

export default app;
