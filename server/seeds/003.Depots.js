exports.seed = async (knex) => {
  const citiesId = await knex.select('id').from('countries');
  // Inserts seed entries
  return knex('depots').insert([
    { city_id: citiesId[0].id, total_warehouses: 5 },
    { city_id: citiesId[1].id, total_warehouses: 5 },
    { city_id: citiesId[2].id, total_warehouses: 5 },
  ]);
};
