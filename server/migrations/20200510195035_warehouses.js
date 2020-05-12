exports.up = function (knex) {
  return knex.schema.createTable('warehouses', (table) => {
    table.increments('id');
    table.integer('position').unsigned().notNullable();
    table
      .integer('current_total_storage')
      .unsigned()
      .notNullable()
      .defaultTo(0);
    table.integer('storage_total_capacity').unsigned().notNullable();
    table.integer('depot_id').unsigned().notNullable();
    table.foreign('depot_id').references('depots.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('warehouses');
};
