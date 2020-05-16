const { Model } = require('objection');

class Company extends Model {
  static get tableName() {
    return 'external_companies';
  }
}

module.exports = Company;
