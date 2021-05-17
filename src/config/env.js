import dotenv from 'dotenv';
dotenv.config();

const config = {
  app_port: process.env.APP_PORT || 3001,
  database_name: process.env.DB_NAME || 'librarystore_db',
  database_password: process.env.DB_PASSWORD || 'root',
  database_user: process.env.DB_USER || 'root',
  database_port: process.env.DB_PORT || 8889,
  jwt_secret_key: process.env.JWT_SECRET
}

export default config;