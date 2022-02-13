
const {knexSnakeCaseMappers} = require('objection');
// @type { Object.<string, import("knex").Knex.Config> }

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      database: 'nodelogin',
      user:     'zaya',
      password: 'jontesan'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: 'seeds',
    },
    ...knexSnakeCaseMappers,

  },
};
 