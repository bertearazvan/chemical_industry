exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('delivery_stocks')
    .del()
    .then(() => {
      return knex('deliveries').del();
    })
    .then(() => {
      return knex('delivery_types').del();
    })
    .then(() => {
      return knex('tokens').del();
    })
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('warehouse_stocks').del();
    })
    .then(() => {
      return knex('drivers_backlog').del();
    })
    .then(() => {
      return knex('trucks').del();
    })
    .then(() => {
      return knex('drivers').del();
    })
    .then(() => {
      return knex('external_companies').del();
    })
    .then(() => {
      return knex('delivery_statuses').del();
    })
    .then(() => {
      return knex('chemicals').del();
    })
    .then(() => {
      return knex('warehouses').del();
    })
    .then(() => {
      return knex('depots').del();
    })
    .then(() => {
      return knex('cities').del();
    })
    .then(() => {
      return knex('countries').del();
    });
};
