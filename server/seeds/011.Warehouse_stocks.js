exports.seed = async (knex) => {
  const warehousesDepotCph = await knex
    .select()
    .from('warehouses')
    .where({ depot_id: 1 });

  // Inserts seed entries
  return knex('warehouse_stocks')
    .insert([
      {
        warehouse_id: warehousesDepotCph[0].id,
        chemical_id: 1,
        storage_amount: 3,
      },
      {
        chemical_id: 3,
        warehouse_id: warehousesDepotCph[0].id,
        storage_amount: 2,
      },
      {
        warehouse_id: warehousesDepotCph[1].id,
        chemical_id: 3,
        storage_amount: 6,
      },
      {
        chemical_id: 2,
        warehouse_id: warehousesDepotCph[2].id,
        storage_amount: 4,
      },
      {
        chemical_id: 3,
        warehouse_id: warehousesDepotCph[2].id,
        storage_amount: 1,
      },
    ])
    .then(() => {
      return knex('warehouses')
        .update({ current_total_storage: 5 })
        .where({ id: warehousesDepotCph[0].id });
    })
    .then(() => {
      return knex('warehouses')
        .update({ current_total_storage: 6 })
        .where({ id: warehousesDepotCph[1].id });
    })
    .then(() => {
      return knex('warehouses')
        .update({ current_total_storage: 5 })
        .where({ id: warehousesDepotCph[2].id });
    });
};
