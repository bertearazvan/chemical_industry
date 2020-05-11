exports.seed = function (knex) {
  // Inserts seed entries
  return knex('countries').insert([
    { id: 1, name: 'Denmark', continent: 'EU' },
    { id: 2, name: 'Germany', continent: 'EU' },
    { id: 3, name: 'Belgium', continent: 'EU' },
  ]);
};
