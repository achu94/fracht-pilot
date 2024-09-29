import { defineConfig } from 'drizzle-kit';
import config from './config';

if (!config || !config.db) {
  throw new Error('Database configuration is missing in config file.');
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: 'mysql',
  dbCredentials: {
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
  },
});
