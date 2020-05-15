exports.up = function (knex) {
  return knex.schema.createTable('tokens', (table) => {
    table.string('token').notNullable().primary();
    table.integer('ttl').notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tokens');
};
