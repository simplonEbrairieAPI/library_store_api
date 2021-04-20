import dotenv from 'dotenv';
dotenv.config();

const config = {
  app_port: process.env.APP_PORT || 3001,
  database_name: process.env.DB_NAME,
  database_password: process.env.DB_PASSWORD,
  database_username: process.env.DB_USER,
  database_port: process.env.DB_PORT,
}

export default config;