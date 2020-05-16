const router = require('express').Router();
// Models
const User = require('../models/User');
const WarehouseStock = require('../models/Warehouse_stock');
// Middleware
const { isAuthenticated } = require('../middleware/auth');
const { getDataDeliveries } = require('../middleware/getDataDeliveries');

router.get(
  '/deliveries/getDeliveryData',
  isAuthenticated,
  getDataDeliveries,
  async (req, res) => {
    // TODO: checl if the user is a depot or warehouse worker
    // if user is warehouse worker he can't access this route

    const user = await User.query().select().where({ id: req.userId });
    if (user[0].warehouse_id === null) {
      return res.send({ reponse: req.deliveryObject });
    } else {
      return res.status(401).send({ response: 'Not authorized' });
    }
  }
);

router.post('/checkDelivery', getDataDeliveries, async (req, res) => {
  userId = 22;
  //   const { companyId, deliveryType, chemicals, drivers, depotId } = req.body;
  // companyId = 3
  // deliveryType = 1
  let chemicals = [
    {
      chemical: 'Chemical C',
      storage: 3,
      id: 3,
    },
    {
      chemical: 'Chemical B',
      storage: 1,
      id: 2,
    },
  ];
  // drivers = 27;
  let depotId = 1;
  // req.deliveryObject;

  const user = await User.query().select().where({ id: userId });
  const possibleStorage = [];
  if (user[0].warehouse_id === null) {
    let warehouses = req.deliveryObject.depots[depotId];
    for (let i = 1; i <= Object.keys(warehouses).length; i++) {
      return chemicals.map((chemical) => {
        if (
          chemical.storage <
          warehouses[i].warehouse_total_capacity -
            warehouses[i].warehouse_current_storage
        ) {
          console.log('HERE');
          if (warehouses[i].chemicals.length > 0) {
            return warehouses[i].chemicals.map((warehouseChemical) => {
              console.log(warehouses[i].chemicals);
              if (warehouseChemical.id === 1) {
                if (chemical.id !== 2) {
                  //   let object = {
                  //     warehouseNumber: depotChemical.warehouse_number,
                  //     depotId: depotChemical.depot_id,
                  //     warehouseId: depotChemical.warehouse_id,
                  //     chemicalName: chemical.chemical,
                  //     storage: chemical.storage,
                  //   };
                  return possibleStorage.push({
                    warehouseNumber: warehouseChemical.warehouse_number,
                    depotId: warehouseChemical.depot_id,
                    warehouseId: warehouseChemical.warehouse_id,
                    chemicalName: chemical.chemical,
                    storage: chemical.storage,
                  });
                }
              } else if (warehouseChemical.id === 2) {
                if (chemical.id !== 1) {
                  return possibleStorage.push({
                    warehouseNumber: warehouseChemical.warehouse_number,
                    depotId: warehouseChemical.depot_id,
                    warehouseId: warehouseChemical.warehouse_id,
                    chemicalName: chemical.chemical,
                    storage: chemical.storage,
                  });
                } else if (warehouseChemical.id === 3) {
                  return possibleStorage.push({
                    warehouseNumber: warehouseChemical.warehouse_number,
                    depotId: warehouseChemical.depot_id,
                    warehouseId: warehouseChemical.warehouse_id,
                    chemicalName: chemical.chemical,
                    storage: chemical.storage,
                  });
                }
              }
            });
          } else {
            // if there are no chemicals
            return possibleStorage.push({
              warehouseNumber: warehouseChemical.warehouse_number,
              depotId: warehouseChemical.depot_id,
              warehouseId: warehouseChemical.warehouse_id,
              chemicalName: chemical.chemical,
              storage: chemical.storage,
            });
          }
        }
      });
      //   console.log(
      //     depot[i].warehouse_total_capacity - depot[i].warehouse_current_storage
      //   );
    }
    return res.send({ reponse: possibleStorage });
    // return res.send({ reponse: depot });
  } else {
    return res.status(401).send({ response: 'Not authorized' });
  }
});

module.exports = router;
