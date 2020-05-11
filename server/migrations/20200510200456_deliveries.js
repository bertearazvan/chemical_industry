exports.up = function (knex) {
  return knex.schema.createTable('deliveries', (table) => {
    table.increments('id');
    table.string('ticket_no').unique();

    table.integer('truck_id').unsigned().notNullable();
    table.foreign('truck_id').references('trucks.id');

    table.integer('to_warehouse_delivery').unsigned().defaultTo(null);
    table.integer('from_warehouse_pickup').unsigned().defaultTo(null);

    table.timestamp('date_left').defaultTo(null);
    table.timestamp('date_arrival').defaultTo(null);
    table.timestamp('date_confirmed').defaultTo(null);

    table.integer('status_id').unsigned().notNullable();
    table.foreign('status_id').references('delivery_statuses.id');

    table.integer('case_handler').unsigned().notNullable();
    table.foreign('case_handler').references('users.id');

    table.integer('drivers_backlog_id').unsigned().notNullable();
    table.foreign('drivers_backlog_id').references('drivers_backlog.id');

    table.integer('company_id').unsigned().notNullable();
    table.foreign('company_id').references('external_companies.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('deliveries');
};
