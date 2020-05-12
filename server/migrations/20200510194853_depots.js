exports.up = function (knex) {
  return knex.schema.createTable('depots', (table) => {
    table.increments('id');
    table.integer('city_id').unsigned().notNullable();
    table.foreign('city_id').references('cities.id');
    table.integer('total_warehouses').unsigned().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('depots');
};
