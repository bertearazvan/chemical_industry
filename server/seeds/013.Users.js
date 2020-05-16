exports.seed = async (knex) => {
  const warehouses = await knex.select().from('warehouses');
  // Inserts seed entries
  return knex('users').insert([
    {
      email: 'anders@chem.com',
      password: '$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy',
      first_name: 'Anders',
      last_name: 'Latif',
      phone_number: '+4500000001',
      depot_id: warehouses[0].depot_id,
    },
    {
      email: 'steven@chem.com',
      password: '$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy',
      first_name: 'Steven',
      last_name: 'Albury',
      phone_number: '+4500000001',
      depot_id: warehouses[0].depot_id,
      warehouse_id: warehouses[0].id,
    },
    {
      email: 'andrei@chem.com',
      password: '$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy',
      first_name: 'Stefan-Andrei',
      last_name: 'Atudorei',
      phone_number: '+4500000001',
      depot_id: warehouses[0].depot_id,
      warehouse_id: warehouses[3].id,
    },
    {
      email: 'cassandra@chem.com',
      password: '$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy',
      first_name: 'Cassandra',
      last_name: 'Tiltack',
      phone_number: '+4500000001',
      depot_id: warehouses[0].depot_id,
      warehouse_id: warehouses[2].id,
    },
    {
      email: 'charlene@chem.com',
      password: '$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy',
      first_name: 'Charlene',
      last_name: 'Marteyn',
      phone_number: '+4500000001',
      depot_id: warehouses[0].depot_id,
      warehouse_id: warehouses[4].id,
    },
    {
      email: 'paulina@chem.com',
      password: '$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy',
      first_name: 'Paulina',
      last_name: 'Kazmierczak',
      phone_number: '+4500000001',
      depot_id: warehouses[0].depot_id,
      warehouse_id: 2,
    },
    {
      email: 'razvan@chem.com',
      password: '$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy',
      first_name: 'Razvan',
      last_name: 'bertea',
      phone_number: '+4500000001',
      depot_id: warehouses[0].depot_id,
      warehouse_id: 2,
    },
  ]);
};
