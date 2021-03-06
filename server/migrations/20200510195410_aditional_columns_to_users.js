exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('phone_number').defaultTo(null);
    table.integer('depot_id').unsigned().notNullable();
    table.foreign('depot_id').references('depots.id');
    table.integer('warehouse_id').unsigned().defaultTo(null);
    table.integer('is_active').unsigned().notNullable().defaultTo(1);
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', (table) => {
    table.dropForeign('depot_id');
    table.dropColumn('depot_id');
    table.dropColumn('warehouse_id');
    table.dropColumn('is_active');
    table.dropColumn('phone_number');
  });
};
