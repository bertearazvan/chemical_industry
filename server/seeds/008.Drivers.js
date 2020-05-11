exports.seed = function (knex) {
  // Inserts seed entries
  return knex('drivers').insert([
    {
      email: 'steven@cheManager.com',
      first_name: 'Steven',
      last_name: 'Albury',
      phone_no: '+4501010101',
      company_id: 1,
    },
    {
      email: 'andrei@cheManager.com',
      first_name: 'Andrei',
      last_name: 'Stefan',
      phone_no: '+4501010101',
      company_id: 1,
    },
    {
      email: 'paulina@bombFactoryAS.com',
      first_name: 'Paulina',
      last_name: 'Kazmierczak',
      phone_no: '+4501010101',
      company_id: 3,
    },
    {
      email: 'charlene@bombFactoryAS.com',
      first_name: 'Charlene',
      last_name: 'Marteyn',
      phone_no: '+4501010101',
      company_id: 3,
    },
    {
      email: 'razvan@chemicalMineAPS.com',
      first_name: 'Razvan',
      last_name: 'Bertea',
      phone_no: '+4501010101',
      company_id: 2,
    },
  ]);
};
