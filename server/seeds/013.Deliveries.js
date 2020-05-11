const { v4: uuidv4 } = require('uuid');

exports.seed = async (knex) => {
  const warehouses = await knex.select().from('warehouses');
  const users = await knex.select().from('users');
  const drivers_backlog = await knex.select().from('drivers_backlog');
  // Inserts seed entries knex.fn.now()
  return knex('deliveries').insert([
    {
      ticket_no: uuidv4(),
      to_warehouse_delivery: warehouses[0].id,
      status_id: 2,
      case_handler: users[1].id,
      drivers_backlog_id: drivers_backlog[0].id,
      company_id: 2,
    },
    {
      ticket_no: uuidv4(),
      from_warehouse_pickup: warehouses[1].id,
      status_id: 1,
      case_handler: users[2].id,
      drivers_backlog_id: drivers_backlog[1].id,
      company_id: 3,
    },
    {
      ticket_no: uuidv4(),
      from_warehouse_pickup: warehouses[0].id,
      status_id: 1,
      case_handler: users[6].id,
      drivers_backlog_id: drivers_backlog[2].id,
      company_id: 3,
    },
    {
      ticket_no: uuidv4(),
      to_warehouse_delivery: warehouses[2].id,
      status_id: 3,
      case_handler: users[6].id,
      drivers_backlog_id: drivers_backlog[4].id,
      company_id: 2,
    },
  ]);
};
