export default {
  db: {
    host: process.env.DB_HOST || 'localhost', // Default to 'localhost' if not provided
    port: parseInt(process.env.DB_PORT || '3307', 10), // Default to MySQL's default port (3306)
    user: process.env.DB_USER || 'root', // Default user
    password: process.env.DB_PASSWORD || '', // Default to an empty password
    database: process.env.DB_NAME || 'test', // Default database name
  },
};
