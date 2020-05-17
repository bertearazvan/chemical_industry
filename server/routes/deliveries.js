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

router.post(
  '/deliveries/checkDelivery',
  isAuthenticated,
  getDataDeliveries,
  async (req, res) => {
    // userId = 22;

    // let { depotId, chemicals, deliveryType } = req.body;

    // companyId = 3
    let deliveryType = 1;
    let chemicals = [
      {
        chemical: 'Chemical C',
        storage: 5,
        id: 3,
      },
      {
        chemical: 'Chemical B',
        storage: 2,
        id: 2,
      },
    ];
    let depotId = 1;
    // drivers = 27;

    try {
      const user = await User.query().select().where({ id: req.userId });

      let possibleStorage = [];
      if (user[0].warehouse_id === null) {
        //select the depot
        let warehouses = req.deliveryObject.depots[depotId];

        if (deliveryType === 1) {
          //map through chemicals from req.body
          chemicals.map((chemical) => {
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
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }

                      // B & A already passed before this

                      // if it is B & C
                      if (chemical.id === 3) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
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
                            i = Object.keys(warehouses).length + 1;
                            return true;
                          }
                        }
                      }

                      if (chemical.id === 2) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }

                      if (chemical.id === 3) {
                        addDataToArray();
                        warehouses[i].warehouse_current_storage +=
                          chemical.storage;
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
                        i = Object.keys(warehouses).length + 1;
                        return true;
                      }
                    }
                  } else if (chemical.id === 2) {
                    addDataToArray();
                    warehouses[i].warehouse_current_storage += chemical.storage;
                    i = Object.keys(warehouses).length + 1;
                    return true;
                  } else if (chemical.id === 3) {
                    addDataToArray();
                    warehouses[i].warehouse_current_storage += chemical.storage;
                    i = Object.keys(warehouses).length + 1;
                    return true;
                  }
                }
              } // end if
            } // for loop
          }); //endmap
          return res.send({ possibleStorage, warehouses });
        } else if (deliveryType === 2) {
          // delivery type pickup
        }
      } else {
        return res.status(401).send({ response: 'Not authorized' });
      }
    } catch (error) {
      return res.status(500).send({ response: 'Something went wrong' });
    }
  }
);

module.exports = router;
