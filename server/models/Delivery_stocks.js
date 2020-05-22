const { Model } = require('objection');

class DeliveryStocks extends Model {
  static get tableName() {
    return 'delivery_stocks';
  }
}

module.exports = DeliveryStocks;
