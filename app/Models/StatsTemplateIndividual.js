'use strict'

const Model = use('Model')

class StatsTemplateIndividual extends Model {
  sport() {
    return this.belongsTo('App/Models/Sport')
  }

  properties() {
    return this.belongsToMany('App/Models/Property')
  }
}

module.exports = StatsTemplateIndividual
