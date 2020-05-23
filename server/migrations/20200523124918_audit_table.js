exports.up = function (knex) {
  return knex.schema.createTable('audit', (table) => {
    table.increments('id');
    table.string('old_data').nullable().defaultTo(null);
    table.string('new_data').notNullable();
    table.string('column_name').notNullable();
    table.string('table_name').notNullable();
    table.string('action').notNullable();
    table.integer('user_action').unsigned().notNullable();
    table.foreign('user_action').references('users.id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('audit');
};
