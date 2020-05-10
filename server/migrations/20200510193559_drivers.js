exports.up = function (knex) {
    return knex.schema.createTable('drivers', (table) => {
      table.increments('id');
      table.string('email');
      table.string('first_name');
      table.string('last_name');
      table.string('phone_no');
      table.integer('company_id').unsigned().notNullable();
      table.foreign('company_id').references('external_companies.id');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('drivers');
  };
  