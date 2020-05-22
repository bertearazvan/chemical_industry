exports.up = function (knex) {
  return knex.schema.createTable('delivery_stocks', (table) => {
    table.integer('delivery_id').unsigned().notNullable();
    table.integer('chemical_id').unsigned().notNullable();
    table.integer('warehouse_id').unsigned().notNullable();
    table.foreign('warehouse_id').references('warehouses.id');
    table.unique(['delivery_id', 'chemical_id', 'warehouse_id']);
    table.foreign('delivery_id').references('deliveries.id');
    table.foreign('chemical_id').references('chemicals.id');
    table.integer('storage_amount').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('delivery_stocks');
};
