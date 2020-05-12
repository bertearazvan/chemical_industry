exports.seed = (knex) => {
  // Inserts seed entries
  return knex('chemicals').insert([
    { id: 1, name: 'Chemical A' },
    { id: 2, name: 'Chemical B' },
    { id: 3, name: 'Chemical C' },
  ]);
};
