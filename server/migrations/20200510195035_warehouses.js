exports.up = function (knex) {
  return knex.schema.createTable('warehouses', (table) => {
    table.increments('id');
    table.string('position');
    table.string('current_total_storage');
    table.string('storage_total_capacity');
    table.integer('depot_id').unsigned().notNullable();
    table.foreign('depot_id').references('depots.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('warehouses');
};
