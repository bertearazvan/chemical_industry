exports.up = function (knex) {
  return knex.schema.createTable('depots', (table) => {
    table.increments('id');
    table.string('city').notNullable();
    table.string('country').notNullable();
    table.integer('total_warehouses').unsigned().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('depots');
};
