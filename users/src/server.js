import app from './app';

const env = process.env;
console.info('running application');

app.listen(env.APP_PORT, console.info(`🚀 serveur démarrer sur le port ${env.APP_PORT}`));
