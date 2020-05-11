exports.up = function (knex) {
  return knex.schema.createTable('external_companies', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('country').notNullable();
    table.string('city').notNullable();
    table.string('phone_number').notNullable();
    table.string('address').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('external_companies');
};
