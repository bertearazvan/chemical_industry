exports.seed = async (knex) => {
  const deliveries = await knex.select().from('deliveries');
  // Inserts seed entries
  return knex('delivery_stocks').insert([
    { delivery_id: deliveries[0].id, chemical_id: 3, storage_amount: 2 },
    { delivery_id: deliveries[0].id, chemical_id: 2, storage_amount: 3 },
    { delivery_id: deliveries[1].id, chemical_id: 1, storage_amount: 2 },
    { delivery_id: deliveries[2].id, chemical_id: 1, storage_amount: 4 },
    { delivery_id: deliveries[3].id, chemical_id: 1, storage_amount: 3 },
    { delivery_id: deliveries[3].id, chemical_id: 3, storage_amount: 2 },
  ]);
};
