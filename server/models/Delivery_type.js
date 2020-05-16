const { Model } = require('objection');

class DeliveryType extends Model {
  static get tableName() {
    return 'delivery_types';
  }
}

module.exports = DeliveryType;
