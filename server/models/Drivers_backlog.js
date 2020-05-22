const { Model } = require('objection');

class DriversBacklog extends Model {
  static get tableName() {
    return 'drivers_backlog';
  }
}

module.exports = DriversBacklog;
