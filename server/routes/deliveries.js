const router = require('express').Router();
const moment = require('moment');
// Mailing service
const nodemailer = require('nodemailer');
const smtpCredentials = require('../config/smtp_credentials');
const { v4: uuidv4 } = require('uuid');
// Models
const User = require('../models/User');
const Delivery = require('../models/Delivery');
const Warehouse = require('../models/Warehouse');
const WarehouseStock = require('../models/Warehouse_stock');
const DeliveryStocks = require('../models/Delivery_stocks');
const DriversBacklog = require('../models/Drivers_backlog');
const Audit = require('../models/Audit');
// Middleware
const { isAuthenticated } = require('../middleware/auth');
const { getDataDeliveries } = require('../middleware/getDataDeliveries');

// get data needed for creating a job
router.get(
  '/deliveries/data',
  isAuthenticated,
  getDataDeliveries,
  async (req, res) => {
    // TODO: checl if the user is a depot or warehouse worker
    // if user is warehouse worker he can't access this route

    const user = await User.query().select().where({ id: req.userId });
    if (user[0].warehouse_id === null) {
      return res.send({ response: req.deliveryObject });
    } else {
      return res.status(401).send({ response: 'Not authorized' });
    }
  }
);

// route for checking the storage of the warehouses in your depot
router.post(
  '/deliveries/checkCreate',
  isAuthenticated,
  getDataDeliveries,
  async (req, res) => {
    let { chemicals, deliveryType } = req.body;

    // let deliveryType = 1; // delivery type pickup
    // let chemicals = [
    //   {
    //     chemical: 'Chemical A',
    //     storage: 6,
    //     id: 1,
    //   },
    //   {
    //     chemical: 'Chemical C',
    //     storage: 1,
    //     id: 3,
    //   },
    // ];

    if (!chemicals || !deliveryType) {
      return res.status(404).send({ response: 'Missing fields' });
    }

    try {
      const user = await User.query().select().where({ id: req.userId });
      let depotId = user[0].depot_id;
      let objectToReturn = {};
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
                  chemicalId: chemical.id,
                  storage: chemical.storage,
                });
              };

              // const addDataToArrayWithStorage = (storage) => {
              //   possibleStorage.push({
              //     warehouseNumber: warehouses[i].warehouse_number,
              //     depotId: warehouses[i].depot_id,
              //     warehouseId: warehouses[i].warehouse_id,
              //     chemicalName: chemical.chemical,
              //     chemicalId: chemical.id,
              //     storage: storage,
              //   });
              // };

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

                    // if (warehouseChemical.id === chemical.id) {
                    //   let diff =
                    //     warehouses[i].warehouse_total_capacity -
                    //     warehouses[i].warehouse_current_storage;
                    //   addDataToArrayWithStorage(diff);
                    //   warehouses[i].warehouse_current_storage += diff;
                    //   chemical.storage -= diff;
                    //   i + 1;
                    //   return true;
                    // }

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
              }
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
                    chemicalId: chemical.id,
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

        if (chemicalsStorage === storageToCompare) {
          objectToReturn.ticketNumber = uuidv4();
          objectToReturn.arrival = moment()
            .add(7, 'days')
            .format('YYYY-MM-DD HH:mm:ss');
          objectToReturn.possibleStorage = possibleStorage;
          return res.status(200).send({ response: objectToReturn });
        } else {
          return res.status(404).send({
            response: 'We could not satisfy the request from this depot',
          });
        }
      } else {
        return res.status(401).send({ response: 'Not authorized' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ response: 'Something went wrong' });
    }
  }
);

// route for confirming a job.
router.post('/deliveries', isAuthenticated, async (req, res) => {
  let {
    deliveryType,
    companyId,
    drivers,
    truckId,
    chemicals,
    ticketNo,
  } = req.body;

  console.log(
    'this is delivery type',
    deliveryType,
    'this is company id',
    companyId,
    'this is drivers id',
    drivers,
    'this is truck id',
    truckId,
    'these are chemicals',
    chemicals,
    'this is ticket no',
    ticketNo
  );

  // let ticketNo = uuidv4();
  // let deliveryType = 1;
  // let companyId = {
  //   companyId: 2,
  //   companyName: 'chemicalMine ApS',
  //   companyPhone: '+4500000004',
  //   companyAddress: 'the danish mine address',
  //   companyLocation: 'Aalborg',
  // };

  // let drivers = [1, 2];

  // let drivers = [
  //   {
  //     driverId: 1,
  //     firstName: 'Steven',
  //     lastName: 'Albury',
  //     phoneNumber: '+4501010101',
  //     driverCompany: 'cheManager.com',
  //   },
  //   {
  //     driverId: 2,
  //     firstName: 'Andrei',
  //     lastName: 'Stefan',
  //     phoneNumber: '+4501010101',
  //     driverCompany: 'cheManager.com',
  //   },
  // ];
  // let truckId = 1;
  // let chemicals = [
  //   {
  //     warehouseNumber: 1,
  //     depotId: 1,
  //     chemicalId: 1,
  //     warehouseId: 1,
  //     chemicalName: 'Chemical A',
  //     storage: 2,
  //   },
  //   {
  //     warehouseNumber: 1,
  //     chemicalId: 3,
  //     depotId: 1,
  //     warehouseId: 1,
  //     chemicalName: 'Chemical C',
  //     storage: 2,
  //   },
  //   {
  //     warehouseNumber: 2,
  //     chemicalId: 3,
  //     depotId: 1,
  //     warehouseId: 2,
  //     chemicalName: 'Chemical C',
  //     storage: 2,
  //   },
  // ];

  if (!deliveryType || !companyId || !drivers || !truckId || !chemicals) {
    return res.status(404).send({ response: 'Missing fields' });
  }

  const trx = await Delivery.startTransaction();

  try {
    const user = await User.query().select().where({ id: req.userId });

    const warehouseWorkers = await User.query()
      .select()
      .whereNot({ warehouse_id: null });

    // console.log(warehouseWorkers);

    const randomWorker =
      warehouseWorkers[Math.floor(Math.random() * warehouseWorkers.length)];

    if (!user[0]) {
      return res.status(401).send({ response: 'User could not be found' });
    }
    // Here you can use the transaction.
    var warehouseStorageError = new Error(
      'The current request has an error regarding the storage.'
    );
    warehouseStorageError.statusCode = 500;

    if (deliveryType === 1) {
      // if delivery type is delivery so we need to deposit
      let driversBacklog = await DriversBacklog.query(trx).insert({
        driver_id_1: drivers[0],
        driver_id_2: drivers[1] ? drivers[1] : null,
        truck_id: truckId,
      });

      await Audit.query(trx).insert({
        old_data: null,
        new_data: driversBacklog.id,
        column_name: 'id',
        table_name: 'drivers_backlog',
        action: 'INSERT',
        user_action: user[0].id,
      });
      // console.log(driversBacklog.id);

      const currentDelivery = await Delivery.query(trx).insert({
        ticket_no: ticketNo,
        date_left: moment().format('YYYY-MM-DD HH:mm:ss'),
        status_id: 1,
        case_handler: randomWorker.id,
        drivers_backlog_id: driversBacklog.id,
        company_id: companyId,
        delivery_type: deliveryType,
        date_left: moment().add(6, 'days').format('YYYY-MM-DD HH:mm:ss'),
        date_scheduled: moment().add(7, 'days').format('YYYY-MM-DD HH:mm:ss'),
      });

      await Audit.query(trx).insert({
        old_data: null,
        new_data: currentDelivery.id,
        column_name: 'id',
        table_name: 'deliveries',
        action: 'INSERT',
        user_action: user[0].id,
      });

      // await Delivery.query().$afterInsert();
      // update warehouses stock and the warehouse
      for (let i = 0; i < chemicals.length; i++) {
        let currentWarehouseStock = await WarehouseStock.query(trx)
          .select('storage_amount')
          .where({
            chemical_id: chemicals[i].chemicalId,
            warehouse_id: chemicals[i].warehouseId,
          });

        if (!currentWarehouseStock[0]) {
          await WarehouseStock.query(trx).insert({
            warehouse_id: chemicals[i].warehouseId,
            chemical_id: chemicals[i].chemicalId,
            storage_amount: 0,
          });
        }

        currentWarehouseStock = await WarehouseStock.query(trx)
          .select('storage_amount')
          .where({
            chemical_id: chemicals[i].chemicalId,
            warehouse_id: chemicals[i].warehouseId,
          });

        console.log(currentWarehouseStock);

        await WarehouseStock.query(trx)
          .update({
            storage_amount:
              currentWarehouseStock[0].storage_amount + chemicals[i].storage,
          })
          .where({
            chemical_id: chemicals[i].chemicalId,
            warehouse_id: chemicals[i].warehouseId,
          });

        await Audit.query(trx).insert({
          old_data: currentWarehouseStock[0].storage_amount,
          new_data:
            currentWarehouseStock[0].storage_amount + chemicals[i].storage,
          column_name: 'storage_amount',
          table_name: 'warehouse_stocks',
          action: 'UPDATE',
          user_action: user[0].id,
        });

        let currentWarehouse = await Warehouse.query(trx)
          .select()
          .where({ id: chemicals[i].warehouseId });

        // check the warehouse storage so we don't exceed
        if (
          currentWarehouse[0].current_total_storage + chemicals[i].storage >
          currentWarehouse[0].storage_total_capacity
        ) {
          throw warehouseStorageError;
        }

        await Warehouse.query(trx)
          .update({
            current_total_storage:
              currentWarehouse[0].current_total_storage + chemicals[i].storage,
          })
          .where({ id: chemicals[i].warehouseId });

        await Audit.query(trx).insert({
          old_data: currentWarehouse[0].current_total_storage,
          new_data:
            currentWarehouse[0].current_total_storage + chemicals[i].storage,
          column_name: 'current_total_storage',
          table_name: 'warehouses',
          action: 'UPDATE',
          user_action: user[0].id,
        });

        let deliveryStocks = await DeliveryStocks.query(trx).insert({
          delivery_id: currentDelivery.id,
          chemical_id: chemicals[i].chemicalId,
          warehouse_id: chemicals[i].warehouseId,
          storage_amount: chemicals[i].storage,
        });

        await Audit.query(trx).insert({
          old_data: null,
          new_data: deliveryStocks.id,
          column_name: 'id',
          table_name: 'delivery_stocks',
          action: 'INSERT',
          user_action: user[0].id,
        });
      }
    }

    if (deliveryType === 2) {
      // if delivery type is pickup so we need to take

      let driversBacklog = await DriversBacklog.query(trx).insert({
        driver_id_1: drivers[0],
        driver_id_2: drivers[1] ? drivers[1] : null,
        truck_id: truckId,
      });

      await Audit.query(trx).insert({
        old_data: null,
        new_data: driversBacklog.id,
        column_name: 'id',
        table_name: 'drivers_backlog',
        action: 'INSERT',
        user_action: user[0].id,
      });
      // console.log(driversBacklog.id);

      const currentDelivery = await Delivery.query(trx).insert({
        ticket_no: ticketNo,
        date_left: moment().add(6, 'days').format('YYYY-MM-DD HH:mm:ss'),
        status_id: 1,
        case_handler: user[0].id,
        drivers_backlog_id: driversBacklog.id,
        company_id: companyId,
        delivery_type: deliveryType,
        date_scheduled: moment().add(7, 'days').format('YYYY-MM-DD HH:mm:ss'),
      });

      await Audit.query(trx).insert({
        old_data: null,
        new_data: currentDelivery.id,
        column_name: 'id',
        table_name: 'deliveries',
        action: 'INSERT',
        user_action: user[0].id,
      });

      // update warehouses stock and the warehouse
      for (let i = 0; i < chemicals.length; i++) {
        let currentWarehouseStock = await WarehouseStock.query(trx)
          .select('storage_amount')
          .where({
            chemical_id: chemicals[i].chemicalId,
            warehouse_id: chemicals[i].warehouseId,
          });

        await WarehouseStock.query(trx)
          .update({
            storage_amount:
              currentWarehouseStock[0].storage_amount - chemicals[i].storage,
          })
          .where({
            chemical_id: chemicals[i].chemicalId,
            warehouse_id: chemicals[i].warehouseId,
          });

        await Audit.query(trx).insert({
          old_data: currentWarehouseStock[0].storage_amount,
          new_data:
            currentWarehouseStock[0].storage_amount - chemicals[i].storage,
          column_name: 'storage_amount',
          table_name: 'warehouse_stocks',
          action: 'UPDATE',
          user_action: user[0].id,
        });

        let currentWarehouse = await Warehouse.query(trx)
          .select()
          .where({ id: chemicals[i].warehouseId });

        // check the warehouse storage so we don't exceed
        if (
          currentWarehouse[0].current_total_storage - chemicals[i].storage <
          0
        ) {
          throw warehouseStorageError;
        }

        await Warehouse.query(trx)
          .update({
            current_total_storage:
              currentWarehouse[0].current_total_storage - chemicals[i].storage,
          })
          .where({ id: chemicals[i].warehouseId });

        await Audit.query(trx).insert({
          old_data: currentWarehouse[0].current_total_storage,
          new_data:
            currentWarehouse[0].current_total_storage - chemicals[i].storage,
          column_name: 'current_total_storage',
          table_name: 'warehouses',
          action: 'UPDATE',
          user_action: user[0].id,
        });

        let deliveryStocks = await DeliveryStocks.query(trx).insert({
          delivery_id: currentDelivery.id,
          chemical_id: chemicals[i].chemicalId,
          warehouse_id: chemicals[i].warehouseId,
          storage_amount: chemicals[i].storage,
        });

        await Audit.query(trx).insert({
          old_data: null,
          new_data: deliveryStocks.id,
          column_name: 'id',
          table_name: 'delivery_stocks',
          action: 'INSERT',
          user_action: user[0].id,
        });
      }
    }

    await trx.commit();
    // Whatever you return from the transaction callback gets returned
    // from the `transaction` function.

    // fire brigade check
    let chemicalAStorage = 0;
    const warehouses = await Warehouse.query()
      .select()
      .where({ depot_id: user[0].depot_id });

    for (let j = 0; j < warehouses.length; j++) {
      let warehouseStocksA = await WarehouseStock.query().select().where({
        warehouse_id: warehouses[j].id,
        chemical_id: 1,
      });
      if (warehouseStocksA[0]) {
        chemicalAStorage += warehouseStocksA[0].storage_amount;
      }
    }
    if (chemicalAStorage >= 15) {
      let transporter = nodemailer.createTransport(smtpCredentials);
      var mailOptions = {
        from: 'chemical.industry.dummy@gmail.com',
        to: 'chemical.industry.dummy@gmail.com',
        subject: 'Fire brigade alert',
        text: `You are receiving this email because the current depot has over 15 kilo-units of chemical A! take care!`,
        html: `You are receiving this email because the current depot has over 15 kilo-units of chemical A! take care!`,
      };

      // try to send email

      transporter.sendMail(mailOptions, (err, info) => {
        console.log('fire brigade called');
        if (err) {
          console.log(err);
          return res.status(502).send({
            message: 'There has been a problem when sending the mail',
          });
        }

        return res.status(200).send({
          message: 'Email is sent!',
        });
      });
    }

    // Here the transaction has been committed.
  } catch (err) {
    // Here the transaction has been rolled back.

    await trx.rollback();
    console.log(err);
    return res.status(500).send({
      response:
        err.message ===
        'The current request has an error regarding the storage.'
          ? err.message
          : 'Something went wrong',
    });
  }

  return res.status(200).send({ response: 'Delivery is created.' });

  // array of chemicals
});

// get data based on the ticket number
router.get(
  '/deliveries/ticket/:ticketNumber',
  isAuthenticated,
  async (req, res) => {
    // ####
    let ticketNumber = req.params.ticketNumber;

    if (!ticketNumber) {
      return res.status(500).send({ response: 'Missing fields' });
    }
    // pass ticket id
    let completeDelivery;
    try {
      const delivery = await Delivery.query()
        .select(
          'delivery_types.id as deliveryTypeId',
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
      completeDelivery.time = moment().format('YYYY-MM-DD HH:mm:ss');

      const deliveryCompany = await Delivery.query()
        .select(
          'external_companies.id as companyId',
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
          'drivers.id as driverId',
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
          'trucks.id as truckId',
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
          'chemicals.id as chemicalId',
          'chemicals.name as chemicalName',
          'delivery_stocks.storage_amount as storage',
          'warehouses.depot_id',
          'warehouses.position as warehouseNumber'
        )
        .join('chemicals', { 'chemicals.id': 'delivery_stocks.chemical_id' })
        .join('warehouses', { 'warehouses.id': 'delivery_stocks.warehouse_id' })
        .where({ delivery_id: delivery[0].id });
      completeDelivery.deliveryStock = deliveryStocks;

      return res.status(200).send({ delivery: completeDelivery });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ response: 'Something went wrong' });
    }
    // check if the ticket id corresponds to the job type
    // return desired data
  }
);

// confirm depot worker
router.post('/deliveries/depot/confirm', isAuthenticated, async (req, res) => {
  const { ticketNumber } = req.body;
  // console.log(ticketNumber);

  if (!ticketNumber) {
    return res.status(400).send({ response: 'Missing fields' });
  }

  const trx = await Delivery.startTransaction();

  try {
    const user = await User.query().select().where({ id: req.userId });

    const currentDelivery = await Delivery.query(trx)
      .select()
      .where({ ticket_no: ticketNumber });

    if (!currentDelivery[0]) {
      await trx.rollback();
      return res.status(404).send({ response: 'Ticket does not exist' });
    }

    const updateDelivery = await Delivery.query(trx)
      .update({
        date_arrival: moment().format('YYYY-MM-DD HH:mm:ss'),
        status_id: 3,
      })
      .where({ ticket_no: ticketNumber });

    await Audit.query(trx).insert({
      old_data: null,
      new_data: moment().format('YYYY-MM-DD HH:mm:ss'),
      column_name: 'date_arrival',
      table_name: 'deliveries',
      action: 'UPDATE',
      user_action: user[0].id,
    });

    await Audit.query(trx).insert({
      old_data: currentDelivery.status_id,
      new_data: 3,
      column_name: 'status_id',
      table_name: 'deliveries',
      action: 'UPDATE',
      user_action: user[0].id,
    });

    if (!updateDelivery) {
      await trx.rollback();
      return res.status(404).send({ response: 'No delivery got updated' });
    }

    await trx.commit();
    return res.status(200).send({ response: 'Delivery updated' });
  } catch (err) {
    console.log(err);
    await trx.rollback();
    return res.status(500).send({ response: 'Something went wrong' });
  }
});

// confirm warehouse worker
router.post(
  '/deliveries/warehouse/confirm',
  isAuthenticated,
  async (req, res) => {
    // get ticketNumber and confirm it
    const { ticketNumber } = req.body;
    const trx = await Delivery.startTransaction();
    try {
      const user = await User.query(trx).select().where({ id: req.userId });

      const currentDelivery = await Delivery.query(trx)
        .select()
        .where({ ticket_no: ticketNumber });

      if (currentDelivery[0].case_handler !== user[0].id) {
        trx.rollback();
        return res.status(401).send({
          response: 'The delivery needs to be confirmed by the case handler.',
        });
      }

      if (!currentDelivery[0]) {
        trx.rollback();
        return res.status(404).send({ response: 'Delivery not found' });
      }

      const updateDelivery = await Delivery.query(trx)
        .update({
          date_confirmed: moment().format('YYYY-MM-DD HH:mm:ss'),
          status_id: 4,
        })
        .where({ ticket_no: ticketNumber });

      await Audit.query(trx).insert({
        old_data: currentDelivery[0].date_confirmed,
        new_data: moment().format('YYYY-MM-DD HH:mm:ss'),
        column_name: 'date_confirmed',
        table_name: 'deliveries',
        action: 'UPDATE',
        user_action: user[0].id,
      });

      await Audit.query(trx).insert({
        old_data: currentDelivery[0].status_id,
        new_data: 4,
        column_name: 'status_id',
        table_name: 'deliveries',
        action: 'UPDATE',
        user_action: user[0].id,
      });

      if (!updateDelivery) {
        trx.rollback();
        return res.status(404).send({ response: 'No delivery got confirmed' });
      }

      trx.commit();
      return res.status(200).send({ response: 'Delivery updated' });
    } catch (err) {
      console.log(err);
      trx.rollback();
      return res.status(500).send({ response: 'Something went wrong' });
    }
    // return all the data for that
  }
);

// get all the deliveries
router.get('/deliveries', isAuthenticated, async (req, res) => {
  // get all deliveries structured
  try {
    const deliveries = await Delivery.query().select();

    for (let i = 0; i < deliveries.length; i++) {
      // ######################################
      let completeDelivery;
      const delivery = await Delivery.query()
        .select(
          'delivery_types.id as deliveryTypeId',
          'deliveries.id',
          'users.username as caseHandler',
          'delivery_types.name as deliveryType',
          'deliveries.ticket_no',
          'deliveries.date_left',
          'deliveries.date_arrival',
          'deliveries.date_confirmed',
          'deliveries.date_scheduled'
        )
        .join('users', { 'users.id': 'deliveries.case_handler' })
        .join('delivery_types', {
          'deliveries.delivery_type': 'delivery_types.id',
        })
        .where({ 'deliveries.id': deliveries[i].id });
      if (!delivery[0]) {
        return res.status(404).send({
          response: 'Delivery could not be found.',
        });
      }
      completeDelivery = delivery[0];

      const deliveryCompany = await Delivery.query()
        .select(
          'external_companies.id as companyId',
          'external_companies.name as companyName',
          'external_companies.phone_number as companyPhone',
          'external_companies.address as companyAddress',
          'cities.name as companyLocation'
        )
        .join('external_companies', {
          'deliveries.company_id': 'external_companies.id',
        })
        .join('cities', { 'external_companies.city_id': 'cities.id' })
        .where({ 'deliveries.id': deliveries[i].id });
      completeDelivery.company = deliveryCompany[0];

      const deliveryDrivers = await Delivery.query()
        .select(
          'drivers.id as driverId',
          'drivers.username as username',
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
        .where({ 'deliveries.id': deliveries[i].id });

      completeDelivery.drivers = deliveryDrivers;

      const deliveryTruck = await Delivery.query()
        .select(
          'trucks.id as truckId',
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
        .where({ 'deliveries.id': deliveries[i].id });
      completeDelivery.truck = deliveryTruck[0];

      const deliveryStocks = await DeliveryStocks.query()
        .select(
          'chemicals.id as chemicalId',
          'chemicals.name as chemicalName',
          'delivery_stocks.storage_amount as storage',
          'warehouses.depot_id',
          'warehouses.position as warehouseNumber'
        )
        .join('chemicals', { 'chemicals.id': 'delivery_stocks.chemical_id' })
        .join('warehouses', { 'warehouses.id': 'delivery_stocks.warehouse_id' })
        .where({ delivery_id: delivery[0].id });

      completeDelivery.deliveryStock = deliveryStocks;

      deliveries[i] = completeDelivery;

      // /#####################################
    }

    return res.status(200).send({ deliveries: deliveries });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ response: 'Something went wrong' });
  }
});

// get all upcoming trucks for today
router.get('/upcomingTrucks', async (req, res) => {
  // get all the upcoming trucks
  // same for depot and warehouse

  try {
    const deliveries = await Delivery.query()
      .select(
        'deliveries.ticket_no as ticketNumber',
        'deliveries.date_scheduled as dateScheduled',
        'delivery_types.name as deliveryType',
        'external_companies.name as company'
      )
      .join('external_companies', {
        'external_companies.id': 'deliveries.company_id',
      })
      .join('delivery_types', {
        'delivery_types.id': 'deliveries.delivery_type',
      })
      .where('date_scheduled', '>=', moment().format('YYYY-MM-DD HH:mm:ss'))
      .where(
        'date_scheduled',
        '<',
        moment().add(6, 'days').format('YYYY-MM-DD HH:mm:ss')
      );

    return res.status(200).send({ response: deliveries });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ response: 'Something went wrong' });
  }
});

module.exports = router;
