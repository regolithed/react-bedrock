module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'development',
    },
    migrations: {
      directory: './server/lib/migrations',
      tableName: 'knex_migrations',
    },
    debug: false, // set true for verbose database operations
  },

  test: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'test',
    },
    migrations: {
      directory: './server/lib/migrations',
      tableName: 'knex_migrations',
    },
    debug: false, // set true for verbose database operations
  },

  production: {
    client: 'postgresql',
    connection: {
      connection: 'process.env.DATABASE_URL',
    },
    migrations: {
      directory: './server/lib/migrations',
      tableName: 'knex_migrations',
    },
    debug: false, // set true for verbose database operations
  },
};
