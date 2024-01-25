import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
const queryClient = postgres("postgres://postgres:12345678@localhost:5432/next_auth");
const db = drizzle(queryClient);
export default db;