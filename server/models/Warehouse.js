const { Model } = require('objection');

class Warehouse extends Model {
  static get tableName() {
    return 'warehouses';
  }
}

module.exports = Warehouse;
