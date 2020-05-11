exports.up = function (knex) {
  return knex.schema
    .table('users', (table) => {
      // table
      //   .timestamp('created_at')
      //   .notNullable()
      //   .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      table
        .timestamp('updated_at')
        .notNullable()
        .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .then(() => {
      return knex.schema.table('chemicals', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('cities', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('countries', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('deliveries', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('delivery_statuses', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('delivery_stocks', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('depots', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('drivers', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('drivers_backlog', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('external_companies', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('trucks', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('warehouse_stocks', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    })
    .then(() => {
      return knex.schema.table('warehouses', (table) => {
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
    });
};

exports.down = function (knex) {
  return knex.schema
    .table('users', (table) => {
      // table.dropColumn('created_at');
      table.dropColumn('updated_at');
    })
    .then(() => {
      return knex.schema.table('chemicals', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('cities', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('countries', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('deliveries', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('delivery_statuses', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('delivery_stocks', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('depots', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('drivers', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('drivers_backlog', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('external_companies', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('trucks', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('warehouse_stocks', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    })
    .then(() => {
      return knex.schema.table('warehouses', (table) => {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
      });
    });
};
