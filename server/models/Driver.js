const { Model } = require('objection');

class Driver extends Model {
  static get tableName() {
    return 'drivers';
  }
}

module.exports = Driver;
