const { v4: uuidv4 } = require('uuid');

exports.seed = async (knex) => {
  const warehouses = await knex.select().from('warehouses');
  const users = await knex.select().from('users');
  const drivers_backlog = await knex.select().from('drivers_backlog');
  // Inserts seed entries knex.fn.now()
  return knex('deliveries').insert([
    {
      ticket_no: uuidv4(),
      status_id: 2,
      case_handler: users[1].id,
      drivers_backlog_id: drivers_backlog[0].id,
      company_id: 2,
      delivery_type: 1,
    },
    {
      ticket_no: uuidv4(),
      status_id: 1,
      case_handler: users[2].id,
      drivers_backlog_id: drivers_backlog[1].id,
      company_id: 3,
      delivery_type: 2,
    },
    {
      ticket_no: uuidv4(),
      status_id: 1,
      case_handler: users[6].id,
      drivers_backlog_id: drivers_backlog[2].id,
      company_id: 3,
      delivery_type: 2,
    },
    {
      ticket_no: uuidv4(),
      status_id: 3,
      case_handler: users[6].id,
      drivers_backlog_id: drivers_backlog[4].id,
      company_id: 2,
      delivery_type: 1,
    },
  ]);
};
