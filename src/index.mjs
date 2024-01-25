import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = "postgres://postgres:12345678@localhost:5432/next_auth"
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);
await migrate(db, { migrationsFolder: "drizzle" });
await sql.end();