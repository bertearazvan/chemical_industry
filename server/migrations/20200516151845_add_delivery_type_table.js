exports.up = function (knex) {
  return knex.schema
    .createTable('delivery_types', (table) => {
      table.increments('id');
      table.string('name').notNullable();
    })
    .then(() => {
      return knex.schema.table('deliveries', (table) => {
        table.integer('delivery_type').unsigned().notNullable();
        table.foreign('delivery_type').references('delivery_types.id');
      });
    });
};

exports.down = function (knex) {
  return knex.schema
    .table('deliveries', (table) => {
      table.dropForeign('delivery_type');
      table.dropColumn('delivery_type');
    })
    .then(() => {
      return knex.schema.dropTableIfExists('delivery_types');
    });
};
