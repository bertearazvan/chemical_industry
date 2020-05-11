exports.up = function (knex) {
  return knex.schema.createTable('warehouse_stocks', (table) => {
    table.integer('warehouse_id').unsigned().notNullable();
    table.integer('chemical_id').unsigned().notNullable();
    table.unique(['warehouse_id', 'chemical_id']);
    table.foreign('warehouse_id').references('warehouses.id');
    table.foreign('chemical_id').references('chemicals.id');
    table.integer('storage_amount').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('warehouse_stocks');
};
