exports.up = function (knex) {
  return knex.schema.createTable('trucks', (table) => {
    table.increments('id');
    table.string('plate_no').notNullable();
    table.integer('total_capacity').unsigned().notNullable();
    table.integer('company_id').unsigned().notNullable();
    table.foreign('company_id').references('external_companies.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('trucks');
};
