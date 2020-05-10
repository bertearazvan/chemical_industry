exports.up = function (knex) {
  knex.schema.hasColumn('depots', 'country').then((status) => {
    if (status) {
      knex.schema.table('depots', (table) => {
        table.dropColumn('country');
      });
    }
  });

  knex.schema.hasColumn('depots', 'city').then((status) => {
    if (status) {
      knex.schema.table('depots', (table) => {
        table.dropColumn('city');
      });
    }
  });

  return knex.schema.table('depots', (table) => {
    table.integer('city_id').unsigned().notNullable();
    table.foreign('city_id').references('cities.id');
  });
};

exports.down = function (knex) {
  return knex.schema.table('depots', (table) => {
    table.dropForeign('city_id');
    table.dropColumn('city_id');
  });
};
