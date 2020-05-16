const { Model } = require('objection');

class Deliveries extends Model {
  static get tableName() {
    return 'deliveries';
  }
}

module.exports = Deliveries;
