// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      user: "root",
      host: "localhost",
      password: "twekl2020",
      database: "crud-knex",
      port: 3306,
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + "/migrations",
    },
  },

  staging: {
    client: "mysql",
    connection: {
      user: "root",
      host: "localhost",
      password: "twekl2020",
      database: "crud-knex",
      port: 3306,
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + "/migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      user: "root",
      host: "localhost",
      password: "twekl2020",
      database: "crud-knex",
      port: 3306,
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + "/migrations",
    },
  },
};
