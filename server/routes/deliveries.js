const router = require('express').Router();
// Models
const User = require('../models/User');
const Delivery = require('../models/Delivery');
const WarehouseStock = require('../models/Warehouse_stock');
const DeliveryStocks = require('../models/Delivery_stocks');
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

router.post(
  '/deliveries/checkCreatingJob',
  isAuthenticated,
  getDataDeliveries,
  async (req, res) => {
    // userId = 22;

    // let { depotId, chemicals, deliveryType } = req.body;

    // companyId = 3
    // let deliveryType = 1; // delivery type delivery
    let deliveryType = 2; // delivery type pickup
    let chemicals = [
      {
        chemical: 'Chemical A',
        storage: 2,
        id: 1,
      },
      {
        chemical: 'Chemical B',
        storage: 4,
        id: 2,
      },
      {
        chemical: 'Chemical C',
        storage: 4,
        id: 3,
      },
    ];
    let depotId = 1;
    // drivers = 27;

    if (!depotId || !chemicals || !deliveryType) {
      res.status(404).send({ response: 'Missing fields' });
    }

    try {
      const user = await User.query().select().where({ id: req.userId });

      let possibleStorage = [];
      let storageToCompare = 0;
      let chemicalsStorage = 0;
      if (user[0].warehouse_id === null) {
        //select the depot
        let warehouses = req.deliveryObject.depots[depotId];

        if (deliveryType === 1) {
          //map through chemicals from req.body
          chemicals.map((chemical) => {
            chemicalsStorage += chemical.storage;
            //loop through every warehouse
            for (let i = 1; i <= Object.keys(warehouses).length; i++) {
              // if the storage the chemical has exceeds the storage left in a warehouse we pass
              const addDataToArray = () => {
                possibleStorage.push({
                  warehouseNumber: warehouses[i].warehouse_number,
                  depotId: warehouses[i].depot_id,
                  warehouseId: warehouses[i].warehouse_id,
                  chemicalName: chemical.chemical,
                  storage: chemical.storage,
                });
              };
              if (
                chemical.storage <=
                warehouses[i].warehouse_total_capacity -
                  warehouses[i].warehouse_current_storage
              ) {
                // if the warehouse contains any chemicals
                if (warehouses[i].chemicals.length > 0) {
                  // looping through the warehouse chemicals
                  warehouses[i].chemicals.some((warehouseChemical) => {
                    // we verify for chemical A & B
                    if (
                      (warehouseChemical.id === 1 && chemical.id === 2) ||
                      (warehouseChemical.id === 2 && chemical.id === 1)
                    ) {
                      // if that happens we want to pass to the next warehouse
                      i + 1;
                      return true;
                    }

                    // if the chemical from the warehouse is A
                    if (warehouseChemical.id === 1) {
                      // chemical A & A
                      if (chemical.id === 1) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        storageToCompare += chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }
                      // chemical A & C
                      if (chemical.id === 3) {
                        // if A & C on warehouse 1
                        if (i === 1) {
                          // chef if the forward neighbour is A
                          let forwardNeighbourChem = warehouses[
                            i + 1
                          ].chemicals.find(
                            (chemicalCheck) => chemicalCheck.id === 1
                          );
                          // if we did not find any it means it is not A
                          if (!forwardNeighbourChem) {
                            addDataToArray();
                            warehouses[i].warehouse_current_storage +=
                              chemical.storage;
                            storageToCompare += chemical.storage;
                            i = Object.keys(warehouses).length + 1;
                            return true;
                          }
                        }

                        // if A & C on warehouses between 1 and the last one
                        if (i > 1 && i < Object.keys(warehouses).length) {
                          // we check the forward neighbor
                          let forwardNeighbourChem = warehouses[
                            i + 1
                          ].chemicals.find(
                            (chemicalCheck) => chemicalCheck.id === 1
                          );

                          // we check the before neighbour
                          let beforeNeighbourChem = warehouses[
                            i - 1
                          ].chemicals.find(
                            (chemicalCheck) => chemicalCheck.id === 1
                          );

                          // if none are found it means we have none with A at adjacent wrehouses
                          if (!forwardNeighbourChem && !beforeNeighbourChem) {
                            addDataToArray();
                            warehouses[i].warehouse_current_storage +=
                              chemical.storage;
                            storageToCompare += chemical.storage;
                            i = Object.keys(warehouses).length + 1;
                            return true;
                          }
                        }
                        // if A&C on the last warehouse
                        if (i === Object.keys(warehouses).length) {
                          // // we check the before neighbour to not be A
                          let beforeNeighbourChem = warehouses[
                            i - 1
                          ].chemicals.find(
                            (chemicalCheck) => chemicalCheck.id === 1
                          );

                          if (!beforeNeighbourChem) {
                            addDataToArray();
                            warehouses[i].warehouse_current_storage +=
                              chemical.storage;
                            storageToCompare += chemical.storage;
                            i = Object.keys(warehouses).length + 1;
                            return true;
                          }
                        }
                      }
                      // if the chemical from the warehouse is chemical B
                    } else if (warehouseChemical.id === 2) {
                      // if it is B & B
                      if (chemical.id === 2) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        storageToCompare += chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }

                      // B & A already passed before this

                      // if it is B & C
                      if (chemical.id === 3) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        storageToCompare += chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }
                      // check for chemical 3
                    } else if (warehouseChemical.id === 3) {
                      // if chemical A & C
                      if (chemical.id === 1) {
                        if (i === 1) {
                          let forwardNeighbourChem = warehouses[
                            i + 1
                          ].chemicals.find(
                            (chemicalCheck) => chemicalCheck.id === 1
                          );
                          if (!forwardNeighbourChem) {
                            addDataToArray();
                            warehouses[i].warehouse_current_storage +=
                              chemical.storage;
                            storageToCompare += chemical.storage;
                            i = Object.keys(warehouses).length + 1;
                            return true;
                          }
                        }

                        if (i > 1 && i < Object.keys(warehouses).length) {
                          let forwardNeighbourChem = warehouses[
                            i + 1
                          ].chemicals.find(
                            (chemicalCheck) => chemicalCheck.id === 1
                          );
                          let beforeNeighbourChem = warehouses[
                            i - 1
                          ].chemicals.find(
                            (chemicalCheck) => chemicalCheck.id === 1
                          );

                          if (!forwardNeighbourChem && !beforeNeighbourChem) {
                            addDataToArray();
                            warehouses[i].warehouse_current_storage +=
                              chemical.storage;
                            storageToCompare += chemical.storage;
                            i = Object.keys(warehouses).length + 1;
                            return true;
                          }
                        }
                        if (i === Object.keys(warehouses).length) {
                          let beforeNeighbourChem = warehouses[
                            i - 1
                          ].chemicals.find(
                            (chemicalCheck) => chemicalCheck.id === 1
                          );

                          if (!beforeNeighbourChem) {
                            addDataToArray();
                            warehouses[i].warehouse_current_storage +=
                              chemical.storage;
                            storageToCompare += chemical.storage;
                            i = Object.keys(warehouses).length + 1;
                            return true;
                          }
                        }
                      }

                      if (chemical.id === 2) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        storageToCompare += chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }

                      if (chemical.id === 3) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        storageToCompare += chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }
                    }
                  }); //endmap
                } else {
                  // if there are no chemicals

                  if (chemical.id === 1) {
                    if (i === 1) {
                      let forwardNeighbourChem = warehouses[
                        i + 1
                      ].chemicals.find(
                        (chemicalCheck) => chemicalCheck.id === 1
                      );
                      if (!forwardNeighbourChem) {
                        addDataToArray();

                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        storageToCompare += chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }
                    }

                    if (i > 1 && i < Object.keys(warehouses).length) {
                      let forwardNeighbourChem = warehouses[
                        i + 1
                      ].chemicals.find(
                        (chemicalCheck) => chemicalCheck.id === 1
                      );
                      let beforeNeighbourChem = warehouses[
                        i - 1
                      ].chemicals.find(
                        (chemicalCheck) => chemicalCheck.id === 1
                      );

                      if (!forwardNeighbourChem && !beforeNeighbourChem) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        storageToCompare += chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }
                    }
                    if (i === Object.keys(warehouses).length) {
                      let beforeNeighbourChem = warehouses[
                        i - 1
                      ].chemicals.find(
                        (chemicalCheck) => chemicalCheck.id === 1
                      );

                      if (!beforeNeighbourChem) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        storageToCompare += chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }
                    }
                  } else if (chemical.id === 2) {
                    addDataToArray();
                    warehouses[i].warehouse_current_storage += chemical.storage;
                    storageToCompare += chemical.storage;
                    i = Object.keys(warehouses).length + 1;
                    return true;
                  } else if (chemical.id === 3) {
                    addDataToArray();
                    warehouses[i].warehouse_current_storage += chemical.storage;
                    storageToCompare += chemical.storage;
                    i = Object.keys(warehouses).length + 1;
                    return true;
                  }
                }
              } // end if
            } // for loop
          }); //endmap
        } else if (deliveryType === 2) {
          // delivery type pickup

          // map through the chemicals we want.
          chemicals.map((chemical) => {
            chemicalsStorage += chemical.storage;
            // map through the warehouses
            for (let i = 1; i <= Object.keys(warehouses).length; i++) {
              // map through the chemicals from the warehouses
              warehouses[i].chemicals.some((warehouseChemical) => {
                const addDataToArray = (storage) => {
                  possibleStorage.push({
                    warehouseNumber: warehouses[i].warehouse_number,
                    depotId: warehouses[i].depot_id,
                    warehouseId: warehouses[i].warehouse_id,
                    chemicalName: chemical.chemical,
                    storage: storage,
                  });
                };

                // if we find a match
                if (chemical.id === warehouseChemical.id) {
                  // we want to compare storages
                  if (chemical.storage > warehouseChemical.storage) {
                    addDataToArray(warehouseChemical.storage);

                    warehouses[i].warehouse_current_storage -=
                      warehouseChemical.storage;
                    chemical.storage -= warehouseChemical.storage;
                    storageToCompare += warehouseChemical.storage;
                    // i = Object.keys(warehouses).length + 1;
                    // return true;
                  } else if (chemical.storage <= warehouseChemical.storage) {
                    addDataToArray(chemical.storage);
                    warehouses[i].warehouse_current_storage -= chemical.storage;
                    storageToCompare += chemical.storage;
                    i = Object.keys(warehouses).length + 1;
                    return true;
                  }
                }
              });
            }
          });

          // check what chemicals we have
          // if we encounter the same chemical id, we compare the storage and see if it is + / - .
        }
        console.log(chemicalsStorage, storageToCompare);
        if (chemicalsStorage === storageToCompare) {
          return res.send({ possibleStorage, warehouses });
        } else {
          res.status(404).send({
            response: 'We could not satisfy the request from this depot',
          });
        }
      } else {
        return res.status(401).send({ response: 'Not authorized' });
      }
    } catch (error) {
      return res.status(500).send({ response: 'Something went wrong' });
    }
  }
);

router.get('/deliveries/checkJob', isAuthenticated, async (req, res) => {
  // ####
  let { ticketNumber } = req.query;
  // pass ticket id
  let completeDelivery;
  try {
    const delivery = await Delivery.query()
      .select(
        'deliveries.id',
        'delivery_types.name as deliveryType',
        'deliveries.ticket_no'
      )
      .join('delivery_types', {
        'deliveries.delivery_type': 'delivery_types.id',
      })
      .where({ ticket_no: ticketNumber });
    if (!delivery[0]) {
      return res.status(404).send({
        response: 'Delivery could not be found.',
      });
    }
    completeDelivery = delivery[0];

    const deliveryCompany = await Delivery.query()
      .select(
        'external_companies.name as companyName',
        'external_companies.phone_number as companyPhone',
        'external_companies.address as companyAddress',
        'cities.name as companyLocation'
      )
      .join('external_companies', {
        'deliveries.company_id': 'external_companies.id',
      })
      .join('cities', { 'external_companies.city_id': 'cities.id' })
      .where({ ticket_no: ticketNumber });
    completeDelivery.company = deliveryCompany[0];

    const deliveryDrivers = await Delivery.query()
      .select(
        'drivers.first_name as firstName',
        'drivers.last_name as lastName',
        'drivers.phone_no as phoneNumber',
        'external_companies.name as driverCompany'
      )
      .join('drivers_backlog', {
        'deliveries.drivers_backlog_id': 'drivers_backlog.id',
      })
      .join('drivers', function () {
        this.on({ 'drivers_backlog.driver_id_1': 'drivers.id' }).orOn({
          'drivers_backlog.driver_id_2': 'drivers.id',
        });
      })
      .join('external_companies', {
        'drivers.company_id': 'external_companies.id',
      })
      .where({ ticket_no: ticketNumber });

    completeDelivery.drivers = deliveryDrivers;

    const deliveryTruck = await Delivery.query()
      .select(
        'trucks.plate_no as plateNumber',
        'trucks.total_capacity as truckTotalCapacity',
        'external_companies.name as truckCompany'
      )
      .join('drivers_backlog', {
        'deliveries.drivers_backlog_id': 'drivers_backlog.id',
      })
      .join('trucks', {
        'drivers_backlog.truck_id': 'trucks.id',
      })
      .join('external_companies', {
        'trucks.company_id': 'external_companies.id',
      })
      .where({ ticket_no: ticketNumber });
    completeDelivery.truck = deliveryTruck[0];

    const deliveryStocks = await DeliveryStocks.query()
      .select(
        'chemicals.name as chemical_name',
        'delivery_stocks.storage_amount as storage',
        'warehouses.depot_id',
        'warehouses.position as warehouse_number'
      )
      .join('chemicals', { 'chemicals.id': 'delivery_stocks.chemical_id' })
      .join('warehouses', { 'warehouses.id': 'delivery_stocks.warehouse_id' })
      .where({ delivery_id: delivery[0].id });
    completeDelivery.deliveryStock = deliveryStocks;

    return res.status(200).send({ delivery: completeDelivery });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ response: 'Something went wrong' });
  }
  // check if the ticket id corresponds to the job type
  // return desired data
});

module.exports = router;
