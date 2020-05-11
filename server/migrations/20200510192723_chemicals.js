exports.up = function (knex) {
  return knex.schema.createTable('chemicals', (table) => {
    table.increments('id');
    table.string('name').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('chemicals');
};
