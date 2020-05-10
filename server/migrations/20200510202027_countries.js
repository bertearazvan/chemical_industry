exports.up = function (knex) {
  return knex.schema.createTable('countries', (table) => {
    table.increments('id');
    table.integer('name');
    table.integer('continent');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('countries');
};
