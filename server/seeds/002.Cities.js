exports.seed = async (knex) => {
  const countryId = await knex
    .select('id')
    .from('countries')
    .where({ name: 'Denmark' });

  // Inserts seed entries
  return knex('cities').insert([
    { id: 1, name: 'Copenhagen', country_id: countryId[0].id },
    { id: 2, name: 'Aalborg', country_id: countryId[0].id },
    { id: 3, name: 'Aarhus', country_id: countryId[0].id },
  ]);
};
