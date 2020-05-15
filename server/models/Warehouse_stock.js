const { Model } = require('objection');

class WarehouseStock extends Model {
  static get tableName() {
    return 'warehouse_stocks';
  }
}

module.exports = WarehouseStock;
