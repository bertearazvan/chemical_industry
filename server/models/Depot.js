const { Model } = require('objection');

class Depot extends Model {
  static get tableName() {
    return 'depots';
  }
}

module.exports = Depot;
