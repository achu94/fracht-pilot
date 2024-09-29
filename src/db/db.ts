import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2/promise";
import config from "../../config";
import * as schema from "./schema";

export const connection = await createConnection({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  multipleStatements: true,
});

export const db = drizzle(connection, { schema, mode: "default" });