export default {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:totm@localhost:5432/postgres',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};