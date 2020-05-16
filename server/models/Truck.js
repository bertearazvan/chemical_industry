const { Model } = require('objection');

class Truck extends Model {
  static get tableName() {
    return 'trucks';
  }
}

module.exports = Truck;
