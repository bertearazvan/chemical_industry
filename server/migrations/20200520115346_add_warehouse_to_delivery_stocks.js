exports.up = function (knex) {
  return knex.schema.table('deliveries', (table) => {
    table.dropColumn('to_warehouse_delivery');
    table.dropColumn('from_warehouse_pickup');
    table.timestamp('date_scheduled').defaultTo(null);
  });
};

exports.down = function (knex) {
  return knex.schema.table('deliveries', (table) => {
    table.dropColumn('date_scheduled');
  });
};
