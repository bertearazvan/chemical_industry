exports.seed = function (knex) {
  // Inserts seed entries
  return knex('drivers').insert([
    {
      username: 'steven',
      first_name: 'Steven',
      last_name: 'Albury',
      phone_no: '+4501010101',
      company_id: 1,
    },
    {
      username: 'andrei',
      first_name: 'Andrei',
      last_name: 'Stefan',
      phone_no: '+4501010101',
      company_id: 1,
    },
    {
      username: 'paulina',
      first_name: 'Paulina',
      last_name: 'Kazmierczak',
      phone_no: '+4501010101',
      company_id: 3,
    },
    {
      username: 'charlene',
      first_name: 'Charlene',
      last_name: 'Marteyn',
      phone_no: '+4501010101',
      company_id: 3,
    },
    {
      username: 'razvan',
      first_name: 'Razvan',
      last_name: 'Bertea',
      phone_no: '+4501010101',
      company_id: 2,
    },
  ]);
};
