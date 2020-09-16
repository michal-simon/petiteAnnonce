const env = process.env;

module.exports = {
  development: {
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: 'postgres',
    port: env.DB_PORT
  },
  test: {
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    host: 'postgres',
    dialect: 'postgres',
    port: env.DB_PORT
  },
  production: {
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: 'postgres',
    port: env.DB_PORT
  }
};
