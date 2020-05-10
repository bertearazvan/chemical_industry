exports.up = function (knex) {
  return knex.schema.createTable('cities', (table) => {
    table.increments('id');
    table.integer('name');
    table.integer('country_id').unsigned().notNullable();
    table.foreign('country_id').references('countries.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cities');
};
