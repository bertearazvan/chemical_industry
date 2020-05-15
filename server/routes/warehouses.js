const router = require('express').Router();
// Models
const Warehouse = require('../models/Warehouse');
const Depot = require('../models/Depot');
const User = require('../models/User');

// Middleware for auth JWT
const { isAuthenticated } = require('../middleware/auth');

router.get('/warehouses', isAuthenticated, async (req, res) => {

  // get user from DB
  const user = await User.query().select().where({ id: req.userId });

  //check if the user exists
  if (!user[0]) {
    return res.status(404).send({ response: 'User was not found.' });
  }

  // check if the user's depot exists
  const depot = await Depot.query().select().where({ id: user[0].depot_id });

  if (!depot[0]) {
    return res.status(404).send({ response: 'Depot was not found.' });
  }

  // check if the user is a warehouse worker or a depot worker
  // if the user is a depot worker he has NULL in the column for the warehouse_id
  if (user[0].warehouse_id === null) {
    // depot worker

    // select the storages based on the warehouses, warehouse_stocks and chemicals tables.

    // We start from the warehouse
    try {
      const warehouses = await Warehouse.query()
        .select(
          'warehouse_stocks.storage_amount',
          'warehouses.current_total_storage as warehouse_current_storage',
          'warehouses.storage_total_capacity as warehouse_total_capacity',
          'chemicals.name as chemical',
          'warehouses.position as warehouse_number',
          'depot_id',
          'warehouses.id as warehouse_id'
        )
        // do an outer join so we can grab also the warehouses that have no chemicals.
        .leftOuterJoin('warehouse_stocks', {
          'warehouses.id': 'warehouse_stocks.warehouse_id',
        })
        // this is done in order for the outer join to have full effect
        .leftOuterJoin('chemicals', {
          'warehouse_stocks.chemical_id': 'chemicals.id',
        })
        // we want to select the warehouse from the depot that the user works in
        .where({ depot_id: user[0].depot_id });

        // Here starts the crazyness... 
        
        // here we reduce the json we got based on the warehouse_number
        // in order to have it structured based on warehouse numbers
      let group = warehouses.reduce((accumulator, warehouse) => {
        accumulator[warehouse.warehouse_number] = [
          warehouse,
          ...(accumulator[warehouse.warehouse_number] || []),
        ];

        return accumulator;
      }, {});

      // here we have a for loop that loops through all the warehouses individually
      for (let i = 1; i <= Object.keys(group).length; i++) {

        // reduce() does not work on arrays of 1 elements apparently 
        // so we need to do it manually in the one that have quality
        if (group[i].length === 1) {
          group[i][0].chemicals = [
            {
              chemical: group[i][0].chemical,
              storage: group[i][0].storage_amount,
            },
          ];

            // the warehouses that have no chemicals also have 1 element in the array.
            // therefore in order to have structured and consistent data we have to 
            // make it as an empty array
          if (group[i][0].chemical === null) {
            group[i][0].chemicals = [];
          }

          // this is done because I noticed sometimes it was returning 
          // an array and sometimes was returning an object.
          // This way all of them are arrays of object/s
          group[i] = group[i][0];

          // we want to delete those key-value pairs because we don't need them anymore
          // our chemicals are found in .chemicals: []
          delete group[i].storage_amount;
          delete group[i].chemical;
        } else {

          // here we want to reduce all the chemicals inside the 
          // .chemicals array inside the object.
          // This is ALIEN
          group[i] = group[i].reduce((accumulator, warehouse) => {
            accumulator.chemicals = [
              ...[
                accumulator.chemicals || {
                  chemical: accumulator.chemical,
                  storage: accumulator.storage_amount,
                },
              ],
              {
                chemical: warehouse.chemical,
                storage: warehouse.storage_amount,
              },
            ];

            delete accumulator.chemical;
            delete accumulator.storage_amount;
            // console.log(group[i]);
            return accumulator;
          });
        }
      }

      // eventally it worked
      return res.status(200).send({ response: group });
    } catch (err) {
      // error if there was any mysql error.
      console.log(err);
      return res.status(500).send({ response: 'Something went wrong' });
    }
  } else {
    // warehouse worker

    // check if the warehouse exists
    const warehouse = await Warehouse.query()
      .select()
      .where({ id: user[0].warehouse_id });

    if (!warehouse[0]) {
      return res.status(404).send({ response: 'Warehouse was not found.' });
    }

    // we do the same for a warehouse worker, but we care just about 
    // the warehouse he is part of
    try {
      // we take the same approach as previously
      let storages = await Warehouse.query()
        .select(
          'warehouse_stocks.storage_amount',
          'warehouses.current_total_storage as warehouse_current_storage',
          'warehouses.storage_total_capacity as warehouse_total_capacity',
          'chemicals.name as chemical',
          'warehouses.position as warehouse_number',
          'depot_id',
          'warehouses.id as warehouse_id'
        )
        .leftOuterJoin('warehouse_stocks', {
          'warehouses.id': 'warehouse_stocks.warehouse_id',
        })
        .leftOuterJoin('chemicals', {
          'warehouse_stocks.chemical_id': 'chemicals.id',
        })
        // we also want to select the depot and the warehouse he is part of.
        .where({
          depot_id: user[0].depot_id,
          'warehouses.id': user[0].warehouse_id,
        });

      if (storages.length === 1) {
        storages[0].chemicals = [
          {
            chemical: storages[0].chemical,
            storage: storages[0].storage_amount,
          },
        ];

        if (storages[0].chemical === null) {
          storages[0].chemicals = [];
        }

        // storages = storages[0];
        delete storages[0].storage_amount;
        delete storages[0].chemical;
      } else {
        storages = [
          storages.reduce((accumulator, warehouse) => {
            //   console.log(group[i]);
            accumulator.chemicals = [
              ...[
                accumulator.chemicals || {
                  chemical: accumulator.chemical,
                  storage: accumulator.storage_amount,
                },
              ],
              {
                chemical: warehouse.chemical,
                storage: warehouse.storage_amount,
              },
            ];

            delete accumulator.chemical;
            delete accumulator.storage_amount;
            // console.log(group[i]);
            return accumulator;
          }),
        ];
      }
      return res.status(200).send({ response: storages });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ response: 'Something went wrong' });
    }
  }
});

module.exports = router;
