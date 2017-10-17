'use strict'

const Model = use('Model')

class StatsTemplateIndividual extends Model {
  static get hidden() {
    return ['sport_id']
  }

  sport() {
    return this.belongsTo('App/Models/Sport')
  }

  properties() {
    return this.belongsToMany('App/Models/Property')
  }
}

module.exports = StatsTemplateIndividual
