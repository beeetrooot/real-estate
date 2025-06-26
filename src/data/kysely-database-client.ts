// this is the Database interface we defined earlier
import { Kysely, PostgresDialect } from "kysely";
import { DB } from "./kysely-database-types";
import { Pool } from "pg";

const dialect = new PostgresDialect({
  pool: new Pool({
    database: "test",
    host: "localhost",
    user: "admin",
    port: 5434,
    max: 10,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const database = new Kysely<DB>({
  dialect,
  // log(event) {
  //   if (event.level === 'error') {
  //     console.error('Query failed : ', {
  //       durationMs: event.queryDurationMillis,
  //       error: event.error,
  //       sql: event.query.sql,
  //       params: event.query.parameters,
  //     });
  //   } else {
  //     // `'query'`
  //     console.log('Query executed : ', {
  //       durationMs: event.queryDurationMillis,
  //       sql: event.query.sql,
  //       params: event.query.parameters,
  //     });
  //   }
  // },
});
