const { Model } = require('objection');
const Audit = require('./Audit');

class Delivery extends Model {
  static get tableName() {
    return 'deliveries';
  }
}

module.exports = Delivery;
