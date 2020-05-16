const { Model } = require('objection');

class Delivery extends Model {
  static get tableName() {
    return 'deliveries';
  }
}

module.exports = Delivery;
