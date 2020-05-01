const credentials = require("./config/db_credentials");

const knexSnakeCaseMapper = require("objection").knexSnakeCaseMappers;

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
    },
  },
  ...knexSnakeCaseMapper(),
};
