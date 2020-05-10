exports.up = function (knex) {
  return knex.schema.createTable('delivery_statuses', (table) => {
    table.increments('id');
    table.string('name');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('delivery_statuses');
};
