// Models
const User = require('../models/User');
const Delivery = require('../models/Delivery');
const Warehouse = require('../models/Warehouse');
const Company = require('../models/Company');
const DeliveryType = require('../models/Delivery_type');
const Driver = require('../models/Driver');
const Truck = require('../models/Truck');
const Chemical = require('../models/Chemical');

const getDataDeliveries = async (req, res, next) => {
  let deliveryObject = {};
  try {
    deliveryObject.users = await User.query().select();
    deliveryObject.deliveries = await Delivery.query().select();
    // deliveryObject.warehouses = await Warehouse.query().select();
    deliveryObject.companies = await Company.query().select();
    deliveryObject.deliveryTypes = await DeliveryType.query().select();
    deliveryObject.drivers = await Driver.query().select();
    deliveryObject.trucks = await Truck.query().select();
    deliveryObject.chemicals = await Chemical.query().select();

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
      });

    // Here starts the crazyness...

    // here we reduce the json we got based on the warehouse_number
    // in order to have it structured based on warehouse numbers
    let group = warehouses.reduce((accumulator, warehouse) => {
      accumulator[warehouse.depot_id] = [
        warehouse,
        ...(accumulator[warehouse.depot_id] || []),
      ];

      return accumulator;
    }, {});

    for (let j = 1; j <= Object.keys(group).length; j++) {
      group[j] = group[j].reduce((accumulator, warehouse) => {
        accumulator[warehouse.warehouse_number] = [
          warehouse,
          ...(accumulator[warehouse.warehouse_number] || []),
        ];

        return accumulator;
      }, {});

      // here we have a for loop that loops through all the warehouses individually
      for (let i = 1; i <= Object.keys(group[j]).length; i++) {
        console.log(group[j][i]);
        // reduce() does not work on arrays of 1 elements apparently
        // so we need to do it manually in the one that have quality
        if (group[j][i].length === 1) {
          group[j][i][0].chemicals = [
            {
              chemical: group[j][i][0].chemical,
              storage: group[j][i][0].storage_amount,
            },
          ];

          // the warehouses that have no chemicals also have 1 element in the array.
          // therefore in order to have structured and consistent data we have to
          // make it as an empty array
          if (group[j][i][0].chemical === null) {
            group[j][i][0].chemicals = [];
          }

          // this is done because I noticed sometimes it was returning
          // an array and sometimes was returning an object.
          // This way all of them are arrays of object/s
          group[j][i] = group[j][i][0];

          // we want to delete those key-value pairs because we don't need them anymore
          // our chemicals are found in .chemicals: []
          delete group[j][i].storage_amount;
          delete group[j][i].chemical;
        } else {
          // here we want to reduce all the chemicals inside the
          // .chemicals array inside the object.
          // This is ALIEN
          group[j][i] = group[j][i].reduce((accumulator, warehouse) => {
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
    }

    // // here we have a for loop that loops through all the warehouses individually
    // for (let i = 1; i <= Object.keys(group).length; i++) {
    //   // reduce() does not work on arrays of 1 elements apparently
    //   // so we need to do it manually in the one that have quality
    //   if (group[i].length === 1) {
    //     group[i][0].chemicals = [
    //       {
    //         chemical: group[i][0].chemical,
    //         storage: group[i][0].storage_amount,
    //       },
    //     ];

    //     // the warehouses that have no chemicals also have 1 element in the array.
    //     // therefore in order to have structured and consistent data we have to
    //     // make it as an empty array
    //     if (group[i][0].chemical === null) {
    //       group[i][0].chemicals = [];
    //     }

    //     // this is done because I noticed sometimes it was returning
    //     // an array and sometimes was returning an object.
    //     // This way all of them are arrays of object/s
    //     group[i] = group[i][0];

    //     // we want to delete those key-value pairs because we don't need them anymore
    //     // our chemicals are found in .chemicals: []
    //     delete group[i].storage_amount;
    //     delete group[i].chemical;
    //   } else {
    //     // here we want to reduce all the chemicals inside the
    //     // .chemicals array inside the object.
    //     // This is ALIEN
    //     group[i] = group[i].reduce((accumulator, warehouse) => {
    //       accumulator.chemicals = [
    //         ...[
    //           accumulator.chemicals || {
    //             chemical: accumulator.chemical,
    //             storage: accumulator.storage_amount,
    //           },
    //         ],
    //         {
    //           chemical: warehouse.chemical,
    //           storage: warehouse.storage_amount,
    //         },
    //       ];

    //       delete accumulator.chemical;
    //       delete accumulator.storage_amount;
    //       // console.log(group[i]);
    //       return accumulator;
    //     });
    //   }
    // }
    deliveryObject.depots = group;

    req.deliveryObject = deliveryObject;
    return next();
  } catch (err) {
    // error if there was any mysql error.
    console.log(err);
    return res.status(500).send({ response: 'Something went wrong' });
  }
};

module.exports = { getDataDeliveries };
