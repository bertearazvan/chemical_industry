exports.seed = async (knex) => {
  const drivers = await knex.select().from('drivers');
  // Inserts seed entries
  return knex('drivers_backlog').insert([
    { driver_id_1: drivers[0].id, driver_id_2: drivers[1].id, truck_id: 1 },
    { driver_id_1: drivers[1].id, truck_id: 2 },
    { driver_id_1: drivers[4].id, truck_id: 3 },
    { driver_id_1: drivers[2].id, truck_id: 4 },
    { driver_id_1: drivers[3].id, truck_id: 5 },
  ]);
};
