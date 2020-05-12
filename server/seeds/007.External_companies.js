exports.seed = async (knex) => {
  // Inserts seed entries
  return knex('external_companies').insert([
    {
      id: 1,
      name: 'cheManager.com',
      address: 'copenhagen address',
      phone_number: '+4500000002',
      city_id: 1,
    },
    {
      id: 2,
      name: 'chemicalMine ApS',
      address: 'the danish mine address',
      phone_number: '+4500000004',
      city_id: 2,
    },
    {
      id: 3,
      name: 'bombFactory A/S',
      address: 'somewhere address',
      phone_number: '+4500000005',
      city_id: 2,
    },
  ]);
};
