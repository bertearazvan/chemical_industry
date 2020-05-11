exports.up = function (knex) {
  return knex.schema.createTable('countries', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('continent').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('countries');
};
