exports.up = function (knex) {
  knex.schema.hasColumn('external_companies', 'country').then((status) => {
    if (status) {
      knex.schema.table('external_companies', (table) => {
        table.dropColumn('country');
      });
    }
  });

  knex.schema.hasColumn('external_companies', 'city').then((status) => {
    if (status) {
      knex.schema.table('external_companies', (table) => {
        table.dropColumn('city');
      });
    }
  });

  return knex.schema.table('external_companies', (table) => {
    table.integer('city_id').unsigned().notNullable();
    table.foreign('city_id').references('cities.id');
  });
};

exports.down = function (knex) {
  return knex.schema.table('external_companies', (table) => {
    table.dropForeign('city_id');
    table.dropColumn('city_id');
  });
};
