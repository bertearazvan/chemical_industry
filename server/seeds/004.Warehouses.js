exports.seed = async (knex) => {
  const depotsId = await knex.select().from('depots');

  let warehousesToInsert = [];

  for (let j = 0; j < depotsId.length; j++) {
    for (let i = 1; i <= depotsId[j].total_warehouses; i++) {
      let storage_total_capacity = 0;
      if (i === 1) {
        storage_total_capacity = 10;
      } else if (i === 2) {
        storage_total_capacity = 12;
      } else if (i === 2) {
        storage_total_capacity = 12;
      } else if (i === 3) {
        storage_total_capacity = 5;
      } else if (i === 4) {
        storage_total_capacity = 3;
      } else if (i === 5) {
        storage_total_capacity = 9;
      }

      warehousesToInsert.push({
        position: i,
        storage_total_capacity: storage_total_capacity,
        depot_id: depotsId[j].id,
      });
    }
  }
  // console.log(warehousesToInsert);
  return knex('warehouses').insert(warehousesToInsert);
};

//  DELIMITER  //; CREATE TRIGGER `after_depot_insert_create_warehouses` AFTER INSERT ON `depots` FOR EACH ROW BEGIN    DECLARE i INT ; IF(new.total_warehouses >  0 ) THEN SET i = 1 ; WHILE i < new.total_warehouses DO INSERT INTO warehouses (depot_id,storage_total_capacity,position) VALUES (new.id,50,i); SET i=i+1; END WHILE ; END IF ;  END;// DELIMITER ; //
