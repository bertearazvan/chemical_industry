exports.up = function (knex) {
  return knex.schema.createTable('depots', (table) => {
    table.increments('id');
    table.string('city');
    table.string('country');
    table.string('total_warehouses');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('depots');
};
