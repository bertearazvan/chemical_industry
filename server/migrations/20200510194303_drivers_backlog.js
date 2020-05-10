exports.up = function (knex) {
  return knex.schema.createTable('drivers_backlog', (table) => {
    table.increments('id');
    table.integer('driver_id_1').unsigned().notNullable();
    table.foreign('driver_id_1').references('drivers.id');
    table.integer('driver_id_2').unsigned().nullable();
    table.integer('truck_id').unsigned().notNullable();
    table.foreign('truck_id').references('trucks.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('drivers_backlog');
};
