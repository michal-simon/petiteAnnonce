const env = process.env;
const config = `postgres://${env.DB_USER}:${env.DB_PASS}@${env.DB_SERVER}:${env.DB_PORT}/${env.DB_NAME}`;

export default config;
