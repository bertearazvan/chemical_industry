exports.seed = function (knex) {
  // Inserts seed entries
  return knex('trucks').insert([
    { id: 1, plate_no: 'DK90CPH', total_capacity: 5, company_id: 1 },
    { id: 2, plate_no: 'DK91CPH', total_capacity: 5, company_id: 1 },
    { id: 3, plate_no: 'DK92AAH', total_capacity: 5, company_id: 3 },
    { id: 4, plate_no: 'DK93AAL', total_capacity: 5, company_id: 2 },
    { id: 5, plate_no: 'DK94AAL', total_capacity: 5, company_id: 2 },
  ]);
};
