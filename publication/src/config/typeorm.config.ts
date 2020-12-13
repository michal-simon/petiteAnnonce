import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const env = process.env;

const ormConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  useUnifiedTopology: true,
  synchronize: true,
  logging: 'all',
  authSource: 'admin',
};

export default ormConfig;
