exports.up = function (knex) {
    return knex.schema.createTable('external_companies', (table) => {
      table.increments('id');
      table.string('name');
      table.string('country');
      table.string('city');
      table.string('phone_number');
      table.string('address');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('external_companies');
  };
  