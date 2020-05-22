exports.seed = async (knex) => {
  const deliveries = await knex.select().from('deliveries');
  const warehousesDk = await knex
    .select()
    .from('warehouses')
    .where({ depot_id: 1 });
  // Inserts seed entries
  return knex('delivery_stocks').insert([
    {
      delivery_id: deliveries[0].id,
      chemical_id: 3,
      storage_amount: 2,
      warehouse_id: warehousesDk[0].id,
    },
    {
      delivery_id: deliveries[0].id,
      chemical_id: 1,
      storage_amount: 2,
      warehouse_id: warehousesDk[0].id,
    },
    {
      delivery_id: deliveries[1].id,
      chemical_id: 3,
      storage_amount: 4,
      warehouse_id: warehousesDk[1].id,
    },
    {
      delivery_id: deliveries[2].id,
      chemical_id: 1,
      storage_amount: 4,
      warehouse_id: warehousesDk[0].id,
    },
    {
      delivery_id: deliveries[3].id,
      chemical_id: 2,
      storage_amount: 2,
      warehouse_id: warehousesDk[2].id,
    },
    {
      delivery_id: deliveries[3].id,
      chemical_id: 2,
      storage_amount: 1,
      warehouse_id: warehousesDk[1].id,
    },
  ]);
};
