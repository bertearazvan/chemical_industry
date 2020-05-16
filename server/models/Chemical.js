const { Model } = require('objection');

class Chemical extends Model {
  static get tableName() {
    return 'chemicals';
  }
}

module.exports = Chemical;
